const ActivityLog = require("../models/ActivityLog");

const getIpAddress = (req) => String(req.headers["x-forwarded-for"] || req.ip || "").split(",")[0].trim();

const logActivity = async (req, { action, resource, resourceId = "", description, metadata = {} }) => {
    try {
        const actor = req.admin || {};
        await ActivityLog.create({
            actor: actor.id || null,
            actorName: actor.name || "Admin",
            action,
            resource,
            resourceId: String(resourceId || ""),
            description,
            metadata,
            ipAddress: getIpAddress(req)
        });
    } catch (error) {
        // Auditing must never prevent the requested admin operation from completing.
        console.error("ACTIVITY LOG ERROR:", error.message);
    }
};

module.exports = { logActivity };
