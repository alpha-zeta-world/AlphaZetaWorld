const { logActivity } = require("../services/activityLog.service");

const createCatalogController = (Model, resourceName = "Data") => {

    const list = async (req, res, next) => {
        try {
            const filter = {};

            if (req.query.status === "inactive") {
                filter.status = "inactive";
            } else if (req.query.status === "all") {
                // No status filter
            } else {
                filter.status = "active";
            }

            if (typeof req.query.search === "string" && req.query.search.trim()) {
                const escaped = req.query.search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const pattern = new RegExp(escaped, "i");
                filter.$or = [{ name: pattern }, { description: pattern }];
            }

            const query = Model.find(filter).sort({ createdAt: -1 });
            const isPaginated = "page" in req.query || "limit" in req.query;

            if (isPaginated) {
                const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
                const limit = Math.min(100, Math.max(1, Number.parseInt(req.query.limit, 10) || 10));
                const [data, total] = await Promise.all([
                    query.skip((page - 1) * limit).limit(limit),
                    Model.countDocuments(filter)
                ]);

                return res.json({
                    success: true,
                    data,
                    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
                });
            }

            const data = await query;
            return res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    };


    const getById = async (req, res, next) => {
        try {
            const filter = {
                _id: req.params.id
            };

            if (
                req.query.status !== "all" &&
                req.query.status !== "inactive"
            ) {
                filter.status = "active";
            }

            const data = await Model.findOne(filter);

            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: `${resourceName} not found`
                });
            }

            res.json({
                success: true,
                data
            });
        } catch (error) {
            next(error);
        }
    };


    const create = async (req, res, next) => {
        try {
            const data = await Model.create(req.body);

            await logActivity(req, { action: "created", resource: resourceName.toLowerCase(), resourceId: data._id, description: `${req.admin.name} created ${resourceName.toLowerCase()} ${data.name}` });

            res.status(201).json({
                success: true,
                message: `${resourceName} created successfully`,
                data
            });
        } catch (error) {
            next(error);
        }
    };


    const update = async (req, res, next) => {
        try {
            const data = await Model.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: `${resourceName} not found`
                });
            }

            await logActivity(req, { action: "updated", resource: resourceName.toLowerCase(), resourceId: data._id, description: `${req.admin.name} updated ${resourceName.toLowerCase()} ${data.name}` });

            res.json({
                success: true,
                message: `${resourceName} updated successfully`,
                data
            });
        } catch (error) {
            next(error);
        }
    };


    const remove = async (req, res, next) => {
        try {
            const data = await Model.findByIdAndDelete(req.params.id);

            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: `${resourceName} not found`
                });
            }

            await logActivity(req, { action: "deleted", resource: resourceName.toLowerCase(), resourceId: data._id, description: `${req.admin.name} deleted ${resourceName.toLowerCase()} ${data.name}` });

            res.json({
                success: true,
                message: `${resourceName} deleted successfully`
            });
        } catch (error) {
            next(error);
        }
    };


    return {
        list,
        getById,
        create,
        update,
        remove
    };
};


module.exports = createCatalogController;
