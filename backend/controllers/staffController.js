const Staff = require("../models/Staff");
exports.getAll = async (req, res) => {
    try {
        const staff = await Staff.find().sort("name");
        res.json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.create = async (req, res) => {
    try {
        const member = await Staff.create({
            ...req.body,
            photoUrl: req.file ? `/uploads/${req.file.filename}` : null,
        });
        res.status(201).json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.update = async (req, res) => {
    try {
        const member = await Staff.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.remove = async (req, res) => {
    try {
        await Staff.findByIdAndDelete(req.params.id);
        res.json({ message: "Staff member deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};