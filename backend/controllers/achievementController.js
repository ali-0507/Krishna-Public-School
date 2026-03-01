const Achievement = require("../models/Achievement");

exports.getAll = async (req, res) => {
    try {
        const achievements = await Achievement.find().sort("-year");
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.create = async (req, res) => {
    try {
        const achievement = await Achievement.create({
            ...req.body,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
        });
        res.status(201).json(achievement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.update = async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(achievement);
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.remove = async (req, res) => {
    try {
        await Achievement.findByIdAndDelete(req.params.id);
        res.json({ message: "Achievement deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};