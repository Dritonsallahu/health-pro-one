const mongoose = require('mongoose');

const visitSchema = mongoose.Schema({
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
    description: {
        type: String
    },
    
},
{
    timestamps: true
})

const Visit = mongoose.model('Visit', visitSchema)

module.exports = Visit