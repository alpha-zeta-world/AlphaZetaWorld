const mongoose = require("mongoose");
const { ADMIN_PERMISSIONS } = require("../constants/adminPermissions");

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "Admin",
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        passwordHash: {
            type: String,
            required() {
                return !this.password;
            }
        },

        password: {
            type: String,
            select: false
        },

        isActive: {
            type: Boolean,
            default: true
        },

        permissions: {
            type: [{ type: String, enum: ADMIN_PERMISSIONS }],
            default: () => [...ADMIN_PERMISSIONS],
            validate: {
                validator: (permissions) => Array.isArray(permissions) && permissions.length > 0,
                message: "An admin account must have at least one page permission"
            }
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.models.Admin ||
    mongoose.model("Admin", adminSchema);
