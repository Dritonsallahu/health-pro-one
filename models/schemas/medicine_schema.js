const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  description: String,
  dosage: String,
  manufacturer: String,
  price: Number,
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
