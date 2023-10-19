const mongoose = require('mongoose')

const clinicSchema = new mongoose.Schema(
    {
        clinicName: {
            type: String,
            
        },
        address: {
            type: String,
            
        },
        clinicNumber: {
            type: Number,
            
        },
        country: {
            type: String
        },
        city: {
            type: String,
        },
        phoneNumber: {
            type: Number,
        }, 
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
       
    })

    const Clinic = mongoose.model('Clinic', clinicSchema)

module.exports = Clinic