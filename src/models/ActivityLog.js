const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema({
    actor: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", default: null },
    actorName: { type: String, trim: true, default: "System" },
    action: { type: String, required: true, trim: true },
    resource: { type: String, required: true, trim: true },
    resourceId: { type: String, default: "" },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
    ipAddress: { type: String, default: "" }
}, { timestamps: true });

activityLogSchema.index({ createdAt: -1 });

module.exports = mongoose.models.ActivityLog || mongoose.model("ActivityLog", activityLogSchema);
