const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const { ADMIN_PERMISSIONS } = require("../constants/adminPermissions");

const requireAdmin = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Authorization token required" });
    }

    let decoded;
    try {
        decoded = jwt.verify(authHeader.slice(7), process.env.JWT_SECRET);
    } catch {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }

    if (decoded.role !== "admin") {
        return res.status(403).json({ success: false, message: "Admin access required" });
    }

    try {
        const admin = await Admin.findById(decoded.id).select("name email isActive permissions");
        if (!admin || !admin.isActive) {
            return res.status(401).json({ success: false, message: "Admin account is unavailable" });
        }

        req.admin = {
            id: String(admin._id),
            name: admin.name,
            email: admin.email,
            role: "admin",
            permissions: Array.isArray(admin.permissions) ? admin.permissions : [...ADMIN_PERMISSIONS]
        };
        return next();
    } catch (error) {
        return next(error);
    }
};

module.exports = requireAdmin;
