const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const superadmin = require("./routes/superadmin_routes");
const login = require("./routes/login");
const clinics = require("./routes/clinic_routes");
const doctors = require("./routes/doctor_routes");
const pacients = require("./routes/patient_routes");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.json()); // te dhenat qe vin si json
app.use(bodyParser.urlencoded({ extended: true })); // te dhenat qe vin prej form/fields te webit

app.use("/", login); // routat e login-it
app.use("/superadmin", superadmin); // routat e superadminit
app.use("/clinics", clinics);
app.use("/doctors", doctors);
app.use("/pacients", pacients);

const client = mongoose
  .connect("mongodb://0.0.0.0:27017/healthproone")
  .then((result) => {
    console.log("DB connected!");
    app.listen(3000, () => {
      console.log("Serveri eshte ne port 3000");
    });
  });
