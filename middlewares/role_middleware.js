const jwt = require("jsonwebtoken");
const User = require("../models/schemas/user_schema");
const Role = require("../models/schemas/role");

function roleMiddleware(role) {
  return (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, "test123", async (err, decodedToken) => {
        if (decodedToken) {
          let user = await User.findById(decodedToken.id).populate("role");
          if (user) {
            if (user.role.roleName === role) {
              next();
            } else {
              res.send("Unauthorized!");
            }
          } else {
            res.send("Unable to find user!");
          }
        } else {
          res.send("Something went wrong!");
        }
      });
    } else {
      res.redirect("../login");
    }
  };
}

module.exports = roleMiddleware;
