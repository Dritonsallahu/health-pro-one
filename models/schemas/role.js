const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  roleNumber: {
    type: Number,
    required: true,
  },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
