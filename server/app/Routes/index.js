import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  if (!req.authenticated) {
    res.status(400).send("User not authenticated!");
  }
  res.status(200).send("User authenticated!");
});

export default indexRouter;
