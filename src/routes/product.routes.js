const express = require("express");

const Product = require("../models/product");
const createCatalogController = require("../controllers/catalog.controller");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");

const router = express.Router();

const controller = createCatalogController(Product);

router.get("/", (req, res, next) => {
    if (req.query.status === "inactive" || req.query.status === "all") return requireAdmin(req, res, () => requirePermission("products")(req, res, next));
    next();
}, controller.list);

router.get("/:id", (req, res, next) => {
    if (req.query.status === "inactive" || req.query.status === "all") return requireAdmin(req, res, () => requirePermission("products")(req, res, next));
    next();
}, controller.getById);
router.post("/", requireAdmin, requirePermission("products"), controller.create);
router.patch("/:id", requireAdmin, requirePermission("products"), controller.update);
router.delete("/:id", requireAdmin, requirePermission("products"), controller.remove);

module.exports = router;
