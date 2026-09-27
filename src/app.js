const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes = require("./routes/contact.routes");
const adminRoutes = require("./routes/admin.routes");
const productRoutes = require("./routes/product.routes");
const serviceRoutes = require("./routes/service.routes");
const uploadRoutes = require("./routes/upload.routes");
const path = require("node:path");

const app = express();

app.use(helmet());

const normalizeOrigin = (value) => {
    try {
        return new URL(value.trim()).origin;
    } catch {
        return value.trim().replace(/\/+$/, "");
    }
};

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173,http://127.0.0.1:5173")
    .split(",")
    .map(normalizeOrigin)
    .filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        const normalizedOrigin = origin ? normalizeOrigin(origin) : "";
        const localDevelopmentOrigin = process.env.NODE_ENV !== "production" &&
            /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin || "");
        callback(null, !origin || allowedOrigins.includes(normalizedOrigin) || localDevelopmentOrigin);
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "32kb" }));
app.use("/uploads", (req, res, next) => {
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    next();
}, express.static(path.join(__dirname, "../uploads"), { index: false }));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API is running"
    });
});

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/products", productRoutes);
app.use("/api/services", serviceRoutes);

// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});

// Error handler
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    const isInvalidJson =
        error instanceof SyntaxError &&
        error.status === 400 &&
        "body" in error;

    const isValidationError = error.name === "ValidationError";
    const isCastError = error.name === "CastError";

    const isUploadError = error.name === "MulterError";
    const status =
        isInvalidJson ||
        isValidationError ||
        isCastError ||
        isUploadError
            ? 400
            : error.status || 500;

    const response = {
        success: false,
        message:
            isInvalidJson
                ? "Request body must be valid JSON"
                : isValidationError
                    ? "Please check the submitted fields"
                : isUploadError
                    ? error.code === "LIMIT_FILE_SIZE" ? "Image must be 5 MB or smaller" : "Invalid image upload"
                    : isCastError
                        ? "Invalid resource identifier"
                        : status === 500
                            ? "An unexpected server error occurred"
                            : error.message
    };

    if (isValidationError) {
        response.errors = Object.values(error.errors).map(
            ({ path, message }) => ({
                field: path,
                message
            })
        );
    }

    res.status(status).json(response);
});

module.exports = app;
