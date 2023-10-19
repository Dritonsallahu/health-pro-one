const { Router } = require("express");
const controller = require('../controller/clinic_controller');
const authMiddleware = require("../middlewares/auth_middleware");
const roleMiddleware = require("../middlewares/role_middleware");

const router = Router();

router.get("/dashboard",  controller.readDashboard);
router.post("/new-doctor",roleMiddleware('Clinic'),authMiddleware, controller.addDoctor);
router.post('/new-patient',roleMiddleware('Clinic'), authMiddleware, controller.addPatient);
router.post('/service',roleMiddleware('Clinic'), authMiddleware, controller.addService);
router.get('/doctors',roleMiddleware('Clinic'), authMiddleware, controller.readDoctors);
router.get('/patients',roleMiddleware('Clinic'), authMiddleware, controller.readPatients);
router.post('/add-medicine',roleMiddleware('Clinic'), authMiddleware, controller.addMedicine);

module.exports = router;