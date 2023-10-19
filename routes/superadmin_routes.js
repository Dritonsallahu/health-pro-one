const { Router } = require("express");
const controller = require('../controller/superadmin_controller')
const authMiddleware = require("../middlewares/auth_middleware");
const roleMiddleware = require("../middlewares/role_middleware");

const router = Router();

router.get("/dashboard", controller.renderDashboard);
router.post('/add-clinic', roleMiddleware('Superadmin'), authMiddleware, controller.addClinic);
router.get('/clinic/:id', roleMiddleware('Superadmin'), authMiddleware, controller.readClinic)
router.get('/user/:id', roleMiddleware('Superadmin'), authMiddleware, controller.readUser)


module.exports = router;
