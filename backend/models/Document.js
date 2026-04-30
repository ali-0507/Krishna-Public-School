const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: [
      "syllabus",
      "fee",
      "policy",
      "books",
      "transport",
      "magazine",
      "calendar",
      "compliance",
    ],
    required: true,
  },

  fileUrl: {
    type: String,
    required: true,
  },

  fileKey: {
    type: String, // for deleting from S3
    required: true,
  },

  size: {
    type: String, // e.g. "2.4 MB"
  },

  status: {
    type: String,
    enum: ["published", "draft"],
    default: "published",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Document", documentSchema);