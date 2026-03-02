const Disclosure = require("../models/Disclosure");

exports.getAll = async (req, res) => {
    try {
        const data = await Disclosure.find().populate("updatedBy", "name role");
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.upsert = async (req, res) => {
    try {
        const { section, fields } = req.body;
        const data = await Disclosure.findOneAndUpdate(
            { section },
            { fields, updatedBy: req.user._id, updatedAt: Date.now() },
            { upsert: true, new: true }
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};