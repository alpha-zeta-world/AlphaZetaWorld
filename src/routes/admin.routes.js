const express = require("express");
const { loginAdmin, changeAdminPassword, listAdmins, createAdmin, updateAdmin, deleteAdmin, listActivityLogs } = require("../controllers/admin.controller");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");
const { getDashboardSummary } = require("../controllers/dashboard.controller");

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/dashboard-summary", requireAdmin, requirePermission("dashboard"), getDashboardSummary);
router.post("/change-password", requireAdmin, changeAdminPassword);
router.get("/staff", requireAdmin, requirePermission("staff"), listAdmins);
router.post("/staff", requireAdmin, requirePermission("staff"), createAdmin);
router.patch("/staff/:id", requireAdmin, requirePermission("staff"), updateAdmin);
router.delete("/staff/:id", requireAdmin, requirePermission("staff"), deleteAdmin);
router.get("/activity-logs", requireAdmin, requirePermission("activity-log"), listActivityLogs);

module.exports = router;
