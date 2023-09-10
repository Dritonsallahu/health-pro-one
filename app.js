const express = require("express");

const app = express();

app.get("/index", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Sereveri eshte ne port 3000");
});
