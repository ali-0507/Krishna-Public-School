const Achievement = require("../models/Achievement");
const s3 = require("../config/s3");

// =============================
// GET ALL ACHIEVEMENTS
// =============================
exports.getAll = async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category && category !== "All") {
      filter.category = category;
    }

    const data = await Achievement.find(filter).sort("-createdAt");

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// =============================
// CREATE ACHIEVEMENT (MULTIPLE IMAGES)
// =============================
exports.create = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        message: "Title and category required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "Images required",
      });
    }

    const cloudfrontUrl = process.env.CLOUDFRONT_URL;

    let uploadedImages = [];

    for (let file of req.files) {
      const key = `achievements/${Date.now()}-${file.originalname}`;

      const upload = await s3
        .upload({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read",
        })
        .promise();

      uploadedImages.push({
        url: `${cloudfrontUrl}/${key}`,
        key,
      });
    }

    const achievement = await Achievement.create({
      title,
      description,
      category,
      images: uploadedImages,
    });

    res.status(201).json(achievement);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// =============================
// ADD MORE IMAGES
// =============================
exports.addImages = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);

    if (!achievement) {
      return res.status(404).json({ message: "Not found" });
    }

  
   let uploadedImages = [];
   
    for (let file of req.files) {
      const key = `achievements/${Date.now()}-${file.originalname}`;

      const uploadResult = await s3
        .upload({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read",
        })
        .promise();

      uploadedImages.push({
        url: `${process.env.CLOUDFRONT_URL}/${key}`,
        key,
      });
    }

   achievement.images.push(...uploadedImages);

    await achievement.save();

    res.json(achievement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.update = async (req, res) => {
  try {
    const updated = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// =============================
// DELETE FULL ACHIEVEMENT
// =============================
exports.remove = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);

    if (!achievement) {
      return res.status(404).json({ message: "Not found" });
    }

    // delete all images from S3
    for (let img of achievement.images) {
      await s3
        .deleteObject({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: img.key,
        })
        .promise();
    }

    await achievement.deleteOne();

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =============================
// DELETE SINGLE IMAGE
// =============================
exports.deleteImage = async (req, res) => {
  try {
    const { imageKey } = req.body;

    const achievement = await Achievement.findById(req.params.id);

    if (!achievement) {
      return res.status(404).json({ message: "Not found" });
    }

    // delete from S3
    await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: imageKey,
      })
      .promise();

    // remove from DB
    achievement.images = achievement.images.filter(
      (img) => img.key !== imageKey
    );

    await achievement.save();

    res.json(achievement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};