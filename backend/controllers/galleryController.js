const Gallery = require("../models/Gallery");

// GET /api/gallery?tag=sports&subCategory=annual_sports_meet
exports.getAll = async (req, res) => {
  try {
    const { tag, subCategory } = req.query;

    let filter = {};

    if (tag) filter.tag = tag;
    if (subCategory) filter.subCategory = subCategory;

    const photos = await Gallery.find(filter)
      .populate("uploadedBy", "name role")
      .sort("-createdAt");

    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/gallery
exports.create = async (req, res) => {
  try {
    const { title, tag, subCategory, description } = req.body;

    if (!title || !tag || !subCategory) {
      return res.status(400).json({
        message: "Title, Tag and SubCategory are required",
      });
    }

    const photo = await Gallery.create({
      title,
      tag,
      subCategory,
      description,
      imageUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user._id,
    });

    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/gallery/:id
exports.remove = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Photo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};