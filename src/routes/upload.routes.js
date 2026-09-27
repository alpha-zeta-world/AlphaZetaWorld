const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const multer = require("multer");
const requireAdmin = require("../middleware/requireAdmin");
const requirePermission = require("../middleware/requirePermission");

const uploadDirectory = path.join(__dirname, "../../uploads/catalog");
const extensions = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/avif": ".avif"
};

fs.mkdirSync(uploadDirectory, { recursive: true });

const upload = multer({
    storage: multer.diskStorage({
        destination: uploadDirectory,
        filename: (req, file, callback) => callback(null, `${crypto.randomUUID()}${extensions[file.mimetype]}`)
    }),
    limits: { fileSize: 5 * 1024 * 1024, files: 1 },
    fileFilter: (req, file, callback) => {
        if (!extensions[file.mimetype]) {
            const error = new Error("Upload a JPEG, PNG, WebP, or AVIF image");
            error.status = 400;
            return callback(error);
        }
        callback(null, true);
    }
});

const router = express.Router();

router.post("/catalog", requireAdmin, requirePermission("products", "services"), upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Choose an image to upload" });
    }

    res.status(201).json({
        success: true,
        data: { image: `/uploads/catalog/${req.file.filename}` }
    });
});

module.exports = router;
