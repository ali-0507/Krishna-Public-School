const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ["board_result", "competition", "sports", "cultural", "institutional"],
        required: true,
    },
    description: { type: String },
    imageUrl: { type: String,default:"",required:true },
    year: { type: String, required: true },
    highlights: [{ type: String }], // e.g., ["School Topper: 98.6%", "100% Pass Rate"] 
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Achievement", achievementSchema);