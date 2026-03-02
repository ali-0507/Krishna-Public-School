const mongoose = require("mongoose");
const schoolInfoSchema = new mongoose.Schema({
    section: { type: String, required: true, unique: true },
    // e.g., "basic_info", "contact", "timings", "admission" 
    fields: { type: Map, of: String },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("SchoolInfo", schoolInfoSchema);