const bcrypt = require("bcrypt");
const User = require("../models/schemas/user_schema");
const Patient = require("../models/schemas/patient_schema");
const Doctor = require("../models/schemas/doctor_schema");
const Service = require("../models/schemas/service_schema");
const Role = require("../models/schemas/role");
const Medicine = require("../models/schemas/medicine_schema");
const { default: mongoose } = require("mongoose");

const readDashboard = async (req, res) => {
  var patients = await Patient.find().populate("userId");
  console.log(patients);
  res.render("clinics/dashboard", { emri: "Driton Sallahu", patients });
};

const addDoctor = async (req, res) => {
  try {
    const password = req.body.password;

    if (!password) {
      return res.status(400).send({ error: "Password is required" });
    }

    const hash = await bcrypt.hash(password, 10);

    req.body.password = hash;

    const role = await Role.findOne({ roleName: "Doctor" });
    const patient = await Patient.findOne({ bloodType: "0 Negative" });

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: role._id,
    });

    const id = user._id;

    const doctor = await Doctor.create({
      user: id,
      position: req.body.position,
      payment: req.body.payment,
      startedAt: new Date(),
      active: req.body.active,
      age: req.body.age,
      patients: patient._id,
    });

    if (doctor) {
      res.send(doctor);
    } else {
      res.send({ error: "Unable to create doctor" });
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(500).send({ message: "Email already in use" });
    } else {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
};

const addNurse = async (req, res) => {
  try {
    const password = req.body.password;

    if (!password) {
      return res.send({ error: "Password is required" });
    }

    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
  } catch (e) {
    res.send(e.message);
  }
};

const newPatientView = async (req, res) => {
  res.render("clinics/new-patient");
};

const addPatient = async (req, res) => {
  console.log(req.body);
  try {
    const password = req.body.password;

    if (!password) {
      return res.status(400).send({ error: "Password is required" });
    }

    const hash = await bcrypt.hash(password, 10);

    req.body.password = hash;

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    var id = user._id;

    const patientObject = await Patient.create({
      clinicId: new mongoose.Types.ObjectId("650c1b70f6e1231001e8708f"),
      userId: id,
      bloodType: req.body.bloodType,
    });

    if (patientObject) {
      res.send(patientObject);
    } else {
      res.send("Unable to add patient");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

const addService = async (req, res) => {
  try {
    const service = await Service.create({
      clinicid: new mongoose.Types.ObjectId("651703dfbe628a8b9c8bebea"),
      doctorId: new mongoose.Types.ObjectId("651703dfbe628a8b9c8bebec"),
      patientId: new mongoose.Types.ObjectId("6516722196da849917e2e007"),
      reason: req.body.reason,
      description: req.body.description,
      recipe: req.body.recipe,
    });

    if (service) {
      res.send(service);
    } else {
      res.send({ error: "Could not create service" });
    }
  } catch (e) {
    res.send({ error: e.message });
  }
};

const readDoctors = async (req, res) => {
  const doctorId = await Role.findOne({ roleName: "Doctor" });

  try {
    const doctors = await User.find({ role: doctorId });
    if (doctors) {
      res.send(doctors);
    } else {
      res.send({ error: "Could not find any doctor" });
    }
  } catch (e) {
    res.send(e.message);
  }
};

const readPatients = async (req, res) => {
  const patientId = await Role.findOne({ roleName: "Patient" });

  try {
    const patients = await User.find({ role: patientId });

    if (patients) {
      res.render("clinics/patients", { patients });
    } else {
      res.send({ error: "Could not find any patient" });
    }
  } catch (e) {
    res.send({ error: e.message });
  }
};

const addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create({
      name: req.body.name,
      description: req.body.description,
      dosage: req.body.dosage,
      manufacturer: req.body.manufacturer,
      price: req.body.price,
    });

    if (medicine) {
      res.send(medicine);
    } else {
      res.send({ error: "Unable to add a medicine" });
    }
  } catch (e) {
    res.send({ error: e.message });
  }
};

module.exports = {
  readDashboard,
  addDoctor,
  addPatient,
  addService,
  readDoctors,
  readPatients,
  addMedicine,
  newPatientView,
};
