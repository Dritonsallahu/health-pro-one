const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    clinic: {
        type: mongoose.Types.ObjectId,
        ref: 'Clinic'
    },
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'Patient'
    },
    date: {
        type: Date
    },
    reason: {
        type: String
    },
    description: {
        type: String
    },
    
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment