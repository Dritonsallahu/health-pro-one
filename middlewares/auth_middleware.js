const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    // const authorizationHeader = req.header("Authorization");
    console.log(req.cookies);
    const token = req.cookies.token;

    if (token) {
      const decoded = jwt.verify(token, "test123");

      if (decoded) {
        next();
      } else {
        res.send({ error: "Token is invalid!" });
      }
    } else {
      res.send({ error: "Unable to find token in the Authorization header!" });
    }
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = auth;
