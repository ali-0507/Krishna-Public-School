const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  aadharNumber: { type: String, required: true },
  dob: { type: Date, required: true },
  dobWords: {type:String},

  applyingClass: { type: String, required: true },
  gender: { type: String, required: true },

  nationality: {type:String},
  religion:{type:String},
  caste: {type:String},
  category: {type:String},
  motherTongue: {type:String},
  placeOfBirth: {type:String},
  specialNeeds: {type:String},

  lastClass:{type:String},
  yearOfPassing:{type:String},
  previousSchool:{type:String},
  board: {type:String},
  medium: {type:String},

  fatherName: { type: String, required: true },
  qualification: {type:String},
  occupation:{type:String},

  mobile: { type: String, required: true },
  email: { type: String, required: true },

  localAddress: {type:String},
  permanentAddress: {type:String},

  status: {
    type: String,
    default: "Pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Admission", admissionSchema);