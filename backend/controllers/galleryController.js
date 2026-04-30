const Gallery = require("../models/Gallery");
const AWS = require("aws-sdk");
const s3 = require("../config/s3");
const sharp = require("sharp")
// GET /api/gallery?tag=sports&subCategory=annual_sports_meet

const cloudfrontUrl = process.env.CLOUDFRONT_URL;

exports.getAll = async (req, res) => {
  try {
    const {category } = req.query;

    let filter = {};

     
    if (category && category !== "All") filter.category = category;

     const galleries = await Gallery.find(filter)
      .sort("-createdAt");

    res.json(galleries);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// console.log("FILES:", req.files);
// POST /api/gallery
exports.create = async (req, res) => {
  try {
    const { title, category } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        message: "Title, Tag and Category are required",
      });
    }

     if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "No images uploaded",
      });
    }

    const uploadedImages = [];

     for (const file of req.files) {

      // 🔥 Compress image
      const compressed = await sharp(file.buffer)
        .resize({ width: 1200 })
        .jpeg({ quality: 80 })
        .toBuffer();
        
    const key = `gallery/${Date.now()}-${file.originalname}`;

     const uploadResult = await s3.upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: compressed,
        ContentType: file.mimetype,
        ACL: "public-read"
      }).promise();

      uploadedImages.push({
        src: `${cloudfrontUrl}/${key}`,
        caption: ""
      });
    }

    const gallery = await Gallery.create({
      title,
      category,
      images: uploadedImages
    });

    res.status(201).json(gallery);
    // console.log("FILES:", req.files);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};




exports.remove = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({ message: "Not found" });
    }

    // delete all images from S3
    for (const img of gallery.images) {
      const key = new URL(img.src).pathname.substring(1);

      await s3.deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
      }).promise();
    }

    await gallery.deleteOne();

    res.json({ message: "Deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



exports.deleteSingleImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { imageUrl } = req.body;

    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return res.status(404).json({ message: "Not found" });
    }

    // 🔥 Remove from S3
    const key = new URL(img.src).pathname.substring(1);

    await s3.deleteObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key
    }).promise();

    // 🔥 Remove from DB
    gallery.images = gallery.images.filter(
      (img) => img.src !== imageUrl
    );

    await gallery.save();

    res.json({ message: "Image deleted" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};







exports.addImages = async (req, res) => {
  try {
    const { id } = req.params;

    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return res.status(404).json({ message: "Not found" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    const newImages = [];

    for (const file of req.files) {
      const compressed = await sharp(file.buffer)
        .resize({ width: 1200 })
        .jpeg({ quality: 80 })
        .toBuffer();

      const key = `gallery/${Date.now()}-${file.originalname}`;

      const uploadResult = await s3.upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: compressed,
        ContentType: file.mimetype,
        ACL: "public-read",
      }).promise();

      newImages.push({
       src: `${cloudfrontUrl}/${key}`,
        caption: "",
      });
    }

    // 🔥 APPEND (important)
    gallery.images.push(...newImages);

    await gallery.save();

    res.json(gallery);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



exports.updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category } = req.body;

    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return res.status(404).json({ message: "Not found" });
    }

    if (title) gallery.title = title;
    if (category) gallery.category = category.toLowerCase();

    await gallery.save();

    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.updateCaption = async (req, res) => {
  try {
    const { id } = req.params;
    const { imageUrl, caption } = req.body;

    const gallery = await Gallery.findById(id);

    if (!gallery) return res.status(404).json({ message: "Not found" });

    const image = gallery.images.find((img) => img.src === imageUrl);

    if (image) {
      image.caption = caption;
    }

    await gallery.save();

    res.json({ message: "Caption updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};