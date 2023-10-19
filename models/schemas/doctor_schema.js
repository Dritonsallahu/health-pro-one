const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        position: {
            type: String,
           
        },
        payment: {
            type: Number,
           
        },
        startedAt: {
            type: Date
        },
        active: {
            type: Boolean,
        },
        age: {
            type: Number
        },
        patients: {
            type: mongoose.Schema.ObjectId,
            ref: 'Patient'
        },
        role: {
            type: mongoose.Schema.ObjectId,
            ref: "Role"
        }
    })

    const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor