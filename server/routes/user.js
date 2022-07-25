const express = require("express");
const router = express.Router();
const User = require("../models/user");

router
  .get("/", (req, res) => res.send("hi user"))
  .get("/register", (req, res) => {
    User.create({
      firstName: "Luan",
      lastName: "Tavares",
      email: "lt@gmail.com",
      password: "1234",
    })
      .then(() => {
        console.log("hit");
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = router;
