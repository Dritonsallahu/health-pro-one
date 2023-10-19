const Appointment = require('../models/schemas/appointment_schema');

const creatAppointment = async (req, res) => {
    try {

        const appointment = await Appointment.create({
            clinic: '6516708f4de739f82fae205d',
            doctor: '651703dfbe628a8b9c8bebec',
            patient: '651b1fd99e006b4af2f7837e',
            date: req.body.date,
            reason: req.body.reason,
            description: req.body.description
        })

        if (appointment) {
            res.send(appointment)
        } else {
            res.send({ error: 'Unable to set an appointment' })
        }

    } catch (e) {
        res.send(e.message)
    }
}

const readAppointment = async (req, res) => {
    const id = req.params.id

    const appointment = await Appointment.findById(id)
        .populate('clinic')
        .populate('doctor')
        .populate('patient')

    res.send(appointment)
}

module.exports = {
    creatAppointment,
    readAppointment,
}