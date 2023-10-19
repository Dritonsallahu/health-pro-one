const Doctor = require('../models/schemas/doctor_schema'); 
const Patient = require('../models/schemas/patient_schema');

async function readDashboard (req, res) {
    res.render("superadmin/dashboard");
};

async function addPatientHistory(req, res) {
  try {
    
    const { patientId, bloodType } = req.body;

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).send({ error: 'Patient not found' });
    };

    patient.bloodType = bloodType;
    await patient.save();

    return res.status(200).send({ message: 'Medical history added successfully', patient });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Internal server error' });
  };
};

async function listPatients(req, res) {
  try {

    const doctorId = '651f18f32cef18ea798a79d7'; 

    const doctor = await Doctor.findById(doctorId).populate('patients');

    if (!doctor) {
      return res.status(404).send({ error: 'Doctor not found' });
    };

    const patients = doctor.patients;

    return res.status(200).send({ patients });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Internal server error' });
  };
};

module.exports = {
  addPatientHistory,
  readDashboard,
  listPatients,
};


