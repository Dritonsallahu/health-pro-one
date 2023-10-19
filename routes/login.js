const { Router } = require("express");
const router = Router();
const controller = require('../controller/login_controller') 

router.post('/signup', controller.signup)
router.get("/login", controller.getLogin);
router.post("/login", controller.login);

module.exports = router;
