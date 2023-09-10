const { Router } = require("express");
const router = Router();

router.get("/login", (req, res) => {
  res.render("credentials/login");
});

module.exports = router;
