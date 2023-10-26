const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  clincId: {
    type: mongoose.Types.ObjectId,
    ref: "Clinic",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  bloodType: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  role: {
    type: mongoose.Schema.ObjectId,
    ref: "Role",
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
