const { Router } = require("express");
const router = Router();

router.get("/dashboard", (req, res) => {
  res.render("superadmin/dashboard");
});

module.exports = router;
