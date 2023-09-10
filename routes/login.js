const { Router } = require("express");
const router = Router();

router.get("/login", (req, res) => {
  res.render("credentials/login");
});

router.post("/login", (req, res) => {
  //   console.log(req.body);

  if (req.body.email === "driton@gmail.com" && req.body.password === "123456") {
    res.redirect("superadmin/dashboard");
  } else {
    res.send("Incorrect email or password");
  }
});

module.exports = router;
