const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    clincId: {
        type: mongoose.Types.ObjectId,
        ref: 'Clinic'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bloodType: {
        type: String
    },
    role: {
        type: mongoose.Schema.ObjectId,
        ref: "Role"
    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;