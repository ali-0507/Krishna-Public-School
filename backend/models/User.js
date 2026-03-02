const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true,trim:true },
    username: { type: String, required: true, unique: true },
    password: { type: String, select:false},
    role: {
        type: String,
        enum: ["director", "principal", "managing_director"],
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});
// Hash password before saving 
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model("User", userSchema);