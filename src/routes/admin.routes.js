const express = require("express");
const { loginAdmin, changeAdminPassword, listAdmins, createAdmin, updateAdmin, deleteAdmin, listActivityLogs } = require("../controllers/admin.controller");
const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/change-password", requireAdmin, changeAdminPassword);
router.get("/staff", requireAdmin, listAdmins);
router.post("/staff", requireAdmin, createAdmin);
router.patch("/staff/:id", requireAdmin, updateAdmin);
router.delete("/staff/:id", requireAdmin, deleteAdmin);
router.get("/activity-logs", requireAdmin, listActivityLogs);

module.exports = router;
