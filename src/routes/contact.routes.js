const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");
const { listContacts, updateContactStatus } = require("../controllers/contact.controller");

const router = express.Router();

router.post("/", createContact);
router.get("/", requireAdmin, requirePermission("contacts"), listContacts);
router.patch("/:id/status", requireAdmin, requirePermission("contacts"), updateContactStatus);

module.exports = router;
