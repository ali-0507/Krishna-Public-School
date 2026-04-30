const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  classInterested: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);