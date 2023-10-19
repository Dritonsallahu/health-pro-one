const bcrypt = require('bcrypt');
const User = require('../models/schemas/user_schema')
const Clinic = require('../models/schemas/clinic')

const renderDashboard = (req, res) => {
  res.render("superadmin/dashboard");
}

const addClinic = async (req, res) => {
  try {

    const clinicObject = await Clinic.create({
      clinicName: req.body.clinicName,
      address: req.body.address,
      city: req.body.city,
      clinicNumber: req.body.clinicNumber,
      country: req.body.country,
      phoneNumber: req.body.phoneNumber,
      owner: req.body.owner
    });

    if (clinicObject) {
      res.send(clinicObject)
    } else {
      res.send({ error: "Unable to create clinic" });
    }
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(500).send({ message: "Email already in use" });
    } else {
      res.status(500).send({ message: 'Something went wrong' })
    }
  }
}

const readClinic = async (req, res) => {
  const id = req.params.id
  const clinic = await Clinic.findById(id).populate('owner')
  res.send(clinic)
}

const readUser = async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id).populate('role')
  res.send(user)
}

module.exports = {
  renderDashboard,
  addClinic,
  readClinic,
  readUser
}