const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.get("/", userController.index).post("/register", userController.create);

module.exports = router;
