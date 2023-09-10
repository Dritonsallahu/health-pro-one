const express = require("express");
const superadmin = require("./routes/superadmin_routes");
const login = require("./routes/login");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "assets")));
console.log(path.join(__dirname, "assets"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", login);
app.use("/superadmin", superadmin);

app.listen(3000, () => {
  console.log("Serveri eshte ne port 3000");
});
