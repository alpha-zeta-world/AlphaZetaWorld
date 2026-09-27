const express = require("express");
const createCatalogController = require("../controllers/catalog.controller");
const Service = require("../models/service");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");

const router = express.Router();
const controller = createCatalogController(Service, "Service");

router.get("/", (req, res, next) => {
    if (req.query.status === "inactive" || req.query.status === "all") return requireAdmin(req, res, () => requirePermission("services")(req, res, next));
    next();
}, controller.list);
router.get("/:id", (req, res, next) => {
    if (req.query.status === "inactive" || req.query.status === "all") return requireAdmin(req, res, () => requirePermission("services")(req, res, next));
    next();
}, controller.getById);
router.post("/", requireAdmin, requirePermission("services"), controller.create);
router.patch("/:id", requireAdmin, requirePermission("services"), controller.update);
router.delete("/:id", requireAdmin, requirePermission("services"), controller.remove);

module.exports = router;
