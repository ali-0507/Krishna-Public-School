const Document = require("../models/Document");


// GET /api/documents 
exports.getAll = async (req, res) => {
    try {
        const docs = await Document.find()
            .populate("uploadedBy", "name role")
            .sort("-updatedAt");
        res.json(docs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// POST /api/documents 
exports.create = async (req, res) => {
    try {
        const doc = await Document.create({
            ...req.body,
            fileUrl: `/uploads/${req.file.filename}`,
            uploadedBy: req.user._id,
        });
        res.status(201).json(doc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// PUT /api/documents/:id 
exports.update = async (req, res) => {
    try {
        const doc = await Document.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        res.json(doc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// DELETE /api/documents/:id 
exports.remove = async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);
        res.json({ message: "Document deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 