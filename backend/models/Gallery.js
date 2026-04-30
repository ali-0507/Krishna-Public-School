const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  // MAIN TAG
  category: {
    type: String,
    enum: ["campus", "events", "sports", "academics", "celebrations"],
    required: true,
  },

  images: [
    {
      src: String,
      caption: String
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
