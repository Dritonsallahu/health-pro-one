const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    clinicid: {
        type: mongoose.Types.ObjectId,
        ref: "Clinic"
    },
    doctorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    },
    patientId: {
        type: mongoose.Types.ObjectId,
        ref: 'Patient'
    },
    reason: {
        type: String
    },
    description: {
        type: String
    },
    recipe: {
        type: String
    },
    role: {
        type: mongoose.Schema.ObjectId,
        ref: "Role"
    }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;