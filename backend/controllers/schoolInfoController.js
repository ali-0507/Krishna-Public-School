const SchoolInfo = require("../models/SchoolInfo");
exports.getAll = async (req, res) => {
    try {
        const info = await SchoolInfo.find().populate("updatedBy", "name role");
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.upsert = async (req, res) => {
    try {
        const { section, fields } = req.body;
        const info = await SchoolInfo.findOneAndUpdate(
            { section },
            { fields, updatedBy: req.user._id, updatedAt: Date.now() },
            { upsert: true, new: true }
        );
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};