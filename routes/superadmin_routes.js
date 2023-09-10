const { Router } = require("express");
const router = Router();

router.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

module.exports = router;
