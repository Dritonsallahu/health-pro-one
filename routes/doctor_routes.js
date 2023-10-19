const { Router } = require("express");
const controller = require('../controller/doctor_controller'); // Assuming you have a separate controller for doctors
const authMiddleware = require("../middlewares/auth_middleware");
const roleMiddleware = require("../middlewares/role_middleware");

const router = Router();

router.get("/dashboard",  controller.readDashboard);
router.post("/patient-history", roleMiddleware('Doctor'), authMiddleware, controller.addPatientHistory);
router.get('/all-patients', roleMiddleware('Doctor'), authMiddleware, controller.listPatients);

module.exports = router