//import express from "express";
import { Router } from "express";
import esolCentreController from "../Controller/esolCentreController.js";
import userController from "../Controller/userController.js";
const userRouter = Router();

userRouter
  .get("/register/", esolCentreController.index)
  .post("/register/", userController.create)
  .post("/login", userController.login);

export default userRouter;
