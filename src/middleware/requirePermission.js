const requirePermission = (...requiredPermissions) => (req, res, next) => {
    const granted = req.admin?.permissions || [];
    const authorized = requiredPermissions.some((permission) => granted.includes(permission));
    if (!authorized) {
        return res.status(403).json({ success: false, message: "You do not have permission to access this page" });
    }
    return next();
};

module.exports = requirePermission;
