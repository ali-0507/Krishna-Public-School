const Document = require("../models/Document");
const s3 = require("../config/s3");

// helper → convert size to MB
const formatSize = (bytes) => {
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};

// =============================
// GET ALL DOCUMENTS
// =============================
exports.getAll = async (req, res) => {
  try {
    const { category, title } = req.query;

    let filter = {};
    if (category && category !== "All") {
      filter.category = category;
    }

    if (title) {
  filter.title = new RegExp(title, "i"); // case-insensitive
}

    const docs = await Document.find(filter).sort("-createdAt");

    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =============================
// CREATE DOCUMENT (UPLOAD)
// =============================
exports.create = async (req, res) => {
  try {
    const { title, category, status } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        message: "Title and category are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const file = req.file;

    // 🔥 create unique key
    const key = `documents/${Date.now()}-${file.originalname}`;

    // 🔥 upload to S3
    const uploadResult = await s3
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      })
      .promise();

    // 🔥 use CloudFront URL
    const cloudfrontUrl = process.env.CLOUDFRONT_URL;

    const document = await Document.create({
      title,
      category,
      status: status || "published",
      fileUrl: `${cloudfrontUrl}/${key}`,
      fileKey: key,
      size: formatSize(file.size),
    });

    res.status(201).json(document);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// =============================
// DELETE DOCUMENT
// =============================
exports.remove = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ message: "Not found" });
    }

    // 🔥 delete from S3
    await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: doc.fileKey,
      })
      .promise();

    await doc.deleteOne();

    res.json({ message: "Document deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};