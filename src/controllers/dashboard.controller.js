const Product = require("../models/product");
const Service = require("../models/service");
const Contact = require("../models/contact");

const getDashboardSummary = async (req, res, next) => {
    try {
        const [products, services, contacts] = await Promise.all([
            Product.countDocuments({ status: "active" }),
            Service.countDocuments({ status: "active" }),
            Contact.countDocuments()
        ]);
        res.json({ success: true, data: { products, services, contacts } });
    } catch (error) {
        next(error);
    }
};

module.exports = { getDashboardSummary };
