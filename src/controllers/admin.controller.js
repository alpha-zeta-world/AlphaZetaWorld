const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const ActivityLog = require("../models/ActivityLog");
const { logActivity } = require("../services/activityLog.service");
const { ADMIN_PERMISSIONS } = require("../constants/adminPermissions");

const permissionsFor = (admin) => Array.isArray(admin.permissions) ? admin.permissions : [...ADMIN_PERMISSIONS];
const toAdminDto = (admin) => ({ id: admin._id, name: admin.name, email: admin.email, isActive: admin.isActive, permissions: permissionsFor(admin), createdAt: admin.createdAt, updatedAt: admin.updatedAt });
const validPermissions = (permissions) => Array.isArray(permissions) && permissions.length > 0 &&
    permissions.every((permission) => ADMIN_PERMISSIONS.includes(permission)) &&
    new Set(permissions).size === permissions.length;
const permissionsWithin = (permissions, granted) => permissions.every((permission) => granted.includes(permission));
const samePermissions = (left, right) => left.length === right.length && left.every((permission) => right.includes(permission));

const loginAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const admin = await Admin.findOne({
            email: email.trim().toLowerCase()
        }).select("+password");

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        if (!admin.isActive) {
            return res.status(403).json({ success: false, message: "This staff account is inactive" });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            admin.passwordHash || admin.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                name: admin.name,
                role: "admin"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "7d"
            }
        );
        await logActivity({ ...req, admin: { id: admin._id, name: admin.name } }, {
            action: "login", resource: "authentication", description: `${admin.name} signed in`
        });

        return res.json({
            success: true,
            message: "Login successful",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: "admin",
                permissions: permissionsFor(admin)
            }
        });

    } catch (error) {
        console.error("ADMIN LOGIN ERROR:", error);
        next(error);
    }
};

const changeAdminPassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body || {};
        if (typeof currentPassword !== "string" || typeof newPassword !== "string") {
            return res.status(400).json({ success: false, message: "Current and new passwords are required" });
        }
        if (newPassword.length < 8) {
            return res.status(400).json({ success: false, message: "New password must be at least 8 characters" });
        }

        const admin = await Admin.findById(req.admin.id).select("+password");
        if (!admin || !admin.isActive) {
            return res.status(404).json({ success: false, message: "Admin account not found" });
        }

        const storedHash = admin.passwordHash || admin.password;
        if (!storedHash || !(await bcrypt.compare(currentPassword, storedHash))) {
            return res.status(401).json({ success: false, message: "Current password is incorrect" });
        }

        admin.passwordHash = await bcrypt.hash(newPassword, 12);
        admin.password = undefined;
        await admin.save();
        await logActivity(req, { action: "password_changed", resource: "staff", resourceId: admin._id, description: `${admin.name} changed their password` });

        return res.json({ success: true, message: "Password changed successfully" });
    } catch (error) {
        next(error);
    }
};

const listAdmins = async (req, res, next) => {
    try {
        const search = typeof req.query.search === "string" ? req.query.search.trim() : "";
        const filter = search ? { $or: [
            { name: new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") },
            { email: new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") }
        ] } : {};
        const admins = await Admin.find(filter).sort({ createdAt: -1 });
        res.json({ success: true, data: admins.map(toAdminDto) });
    } catch (error) { next(error); }
};

const createAdmin = async (req, res, next) => {
    try {
        const { name, email, password, permissions } = req.body || {};
        if (typeof name !== "string" || !name.trim() || typeof email !== "string" || typeof password !== "string") return res.status(400).json({ success: false, message: "Name, email and password are required" });
        if (password.length < 8) return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        if (!validPermissions(permissions)) return res.status(400).json({ success: false, message: "Select at least one valid page permission" });
        if (!permissionsWithin(permissions, req.admin.permissions)) return res.status(403).json({ success: false, message: "You cannot grant permissions you do not have" });
        const normalizedEmail = email.trim().toLowerCase();
        if (await Admin.exists({ email: normalizedEmail })) return res.status(409).json({ success: false, message: "An admin with this email already exists" });
        const admin = await Admin.create({ name: name.trim(), email: normalizedEmail, passwordHash: await bcrypt.hash(password, 12), permissions });
        await logActivity(req, { action: "created", resource: "staff", resourceId: admin._id, description: `${req.admin.name} added staff member ${admin.name}`, metadata: { email: admin.email } });
        res.status(201).json({ success: true, message: "Staff member added successfully", data: toAdminDto(admin) });
    } catch (error) { next(error); }
};

const updateAdmin = async (req, res, next) => {
    try {
        const { name, email, password, isActive, permissions } = req.body || {};
        const admin = await Admin.findById(req.params.id).select("+password");
        if (!admin) return res.status(404).json({ success: false, message: "Staff member not found" });
        const targetPermissions = Array.isArray(admin.permissions) ? admin.permissions : ADMIN_PERMISSIONS;
        if (!permissionsWithin(targetPermissions, req.admin.permissions)) return res.status(403).json({ success: false, message: "You cannot manage an account with broader permissions" });
        if (permissions !== undefined) {
            if (!validPermissions(permissions)) return res.status(400).json({ success: false, message: "Select at least one valid page permission" });
            if (String(admin._id) === String(req.admin.id) && !samePermissions(permissions, targetPermissions)) return res.status(400).json({ success: false, message: "You cannot change your own page permissions" });
            if (!permissionsWithin(permissions, req.admin.permissions)) return res.status(403).json({ success: false, message: "You cannot grant permissions you do not have" });
            admin.permissions = permissions;
        }
        if (typeof name === "string" && name.trim()) admin.name = name.trim();
        if (typeof email === "string" && email.trim()) {
            const normalizedEmail = email.trim().toLowerCase();
            const duplicate = await Admin.exists({ email: normalizedEmail, _id: { $ne: admin._id } });
            if (duplicate) return res.status(409).json({ success: false, message: "An admin with this email already exists" });
            admin.email = normalizedEmail;
        }
        if (password !== undefined) {
            if (typeof password !== "string" || password.length < 8) return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
            admin.passwordHash = await bcrypt.hash(password, 12);
        }
        if (typeof isActive === "boolean") {
            if (String(admin._id) === String(req.admin.id) && !isActive) return res.status(400).json({ success: false, message: "You cannot deactivate your own account" });
            admin.isActive = isActive;
        }
        await admin.save();
        await logActivity(req, { action: "updated", resource: "staff", resourceId: admin._id, description: `${req.admin.name} updated staff member ${admin.name}`, metadata: { email: admin.email } });
        res.json({ success: true, message: "Staff member updated successfully", data: toAdminDto(admin) });
    } catch (error) { next(error); }
};

const deleteAdmin = async (req, res, next) => {
    try {
        if (String(req.params.id) === String(req.admin.id)) return res.status(400).json({ success: false, message: "You cannot delete your own account" });
        const existing = await Admin.findById(req.params.id).select("permissions");
        if (!existing) return res.status(404).json({ success: false, message: "Staff member not found" });
        const targetPermissions = Array.isArray(existing.permissions) ? existing.permissions : ADMIN_PERMISSIONS;
        if (!permissionsWithin(targetPermissions, req.admin.permissions)) return res.status(403).json({ success: false, message: "You cannot delete an account with broader permissions" });
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) return res.status(404).json({ success: false, message: "Staff member not found" });
        await logActivity(req, { action: "deleted", resource: "staff", resourceId: admin._id, description: `${req.admin.name} removed staff member ${admin.name}`, metadata: { email: admin.email } });
        res.json({ success: true, message: "Staff member removed successfully" });
    } catch (error) { next(error); }
};

const listActivityLogs = async (req, res, next) => {
    try {
        const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
        const limit = Math.min(100, Math.max(1, Number.parseInt(req.query.limit, 10) || 20));
        const [data, total] = await Promise.all([ActivityLog.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(), ActivityLog.countDocuments()]);
        res.json({ success: true, data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
    } catch (error) { next(error); }
};

module.exports = {
    loginAdmin,
    changeAdminPassword,
    listAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    listActivityLogs
};
