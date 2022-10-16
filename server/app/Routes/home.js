const homeRouter = Router();
import { Router } from "express";

homeRouter.get("/", (req, res) => {
  res.status(200).send("Get route reached!");
});

export default homeRouter;
