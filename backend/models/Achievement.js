const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String,

  category: {
    type: String,
    enum: ["academic", "sports", "special", "olympiad"],
    required: true,
  },

  images: [
    {
      url: String,
      key: String,
    },
  ],

  year: {
  type: String,
},

highlighted: {
  type: Boolean,
  default: false,
},

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Achievement", achievementSchema);