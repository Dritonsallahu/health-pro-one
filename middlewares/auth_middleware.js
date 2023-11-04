const jwt = require("jsonwebtoken");

const auth = (req, res, next) => { 
  try {  
    var token = req.cookies.token;    
      const decoded = jwt.verify(token, 'test123');
    
      if (decoded) {
        next();
      } else {
        res.send({ error: "Token is invalid!" });
      }
   
  } catch (e) {
 
    res.send(e.message);
  }
};

module.exports = auth;
