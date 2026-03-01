const mongoose = require("mongoose");
const disclosureSchema = new mongoose.Schema({
    section: { type: String, required: true },
    // e.g., "general_info", "documents", "result", "staff", "infrastructure" 
    fields: [
        {
            label: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Disclosure", disclosureSchema); 
