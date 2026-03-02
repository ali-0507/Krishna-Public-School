const mongoose = require("mongoose");
const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: {
        type: String,
        enum: ["syllabus", "fee_structure", "calendar", "circular", "policy", "result"],
        required: true,
    },
    fileUrl: { type: String, required: true },
    fileSize: { type: String },
    applicableClass: { type: String },
    academicYear: { type: String },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Document", documentSchema);