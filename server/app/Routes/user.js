//import express from "express";
import { Router } from "express";
import esolCentreController from "../Controller/esolCentreController.js";
import userController from "../Controller/userController.js";
const router = Router();

router
  .get("/", userController.index)
  .get("/register/", esolCentreController.index)
  .post("/register/", userController.create)
  .post("/login", (req, res) => res.send("login route reached"));

export default router;
