const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    qualification: { type: String },
    experience: { type: String },
    photoUrl: { type: String },
    email: { type: String },
    phone: { type: String },
    joinDate: { type: Date },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
});
module.exports = mongoose.model("Staff", staffSchema); 