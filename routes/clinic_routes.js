const { Router } = require("express");
const controller = require("../controller/clinic_controller");
const authMiddleware = require("../middlewares/auth_middleware");
const roleMiddleware = require("../middlewares/role_middleware");

const router = Router();

router.get("/dashboard", controller.readDashboard);
router.post(
  "/new-doctor",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.addDoctor
);

router.post(
  "/new-patient",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.addPatient
);

router.get(
  "/new-patient",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.newPatientView
);

router.get(
  "/edit-patient/:patientID",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.editPatientView
);

router.post(
  "/edit-patient",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.editPatient
);

router.get(
  "/delete-patient/:patientId",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.deletePatient
);

router.post(
  "/service",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.addService
);
router.get(
  "/doctors",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.readDoctors
);
router.get(
  "/patients",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.readPatients
);
router.get(
  '/visits',
  roleMiddleware('Clinic'),
  authMiddleware,
  controller.showVisits
  );
router.get(
  '/new-visit',
  roleMiddleware('Clinic'),
  authMiddleware,
  controller.addVisitView
  );
router.post(
  "/add-medicine",
  roleMiddleware("Clinic"),
  authMiddleware,
  controller.addMedicine
);

module.exports = router;
