const { Router } = require("express");
const controller = require('../controller/patient_controller');     
const roleMiddleware = require("../middlewares/role_middleware");

const router = Router();

router.post('/add-appointment',roleMiddleware('Patient'), controller.creatAppointment)
router.get('/get-appointment/:id', roleMiddleware('Patient'), controller.readAppointment)

module.exports = router