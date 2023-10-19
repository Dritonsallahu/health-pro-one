const mongoose = require('mongoose')

const SuperadminSchema = new mongoose.model(
{
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
})

const Superadmin = mongoose.model('Superadmin', SuperadminSchema)

module.exports = Superadmin