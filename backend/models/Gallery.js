const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  // MAIN TAG
  tag: {
    type: String,
    enum: ["campus", "events", "sports", "academics", "celebrations"],
    required: true,
  },

  // SUB CATEGORY INSIDE TAG
  subCategory: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);