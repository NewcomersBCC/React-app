import "dotenv/config";
import databaseInstance from "./config/database.js";
import express from "express";
const app = express();
import userRouter from "./app/Routes/user.js";
import homeRouter from "./app/Routes/home.js";
import indexRouter from "./app/Routes/index.js";
import cookieParser from "cookie-parser";
import JWT from "./app/Middlewares/JWT.js";

/* Database connection */

try {
  databaseInstance.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(cookieParser());
app.use(express.json());

//Middlewares
app.use("/index", JWT.validateToken);
app.use("/home", JWT.validateToken);

//Index routes
app.use("/index", indexRouter);

//User routes
app.use("/user", userRouter);

//Home routes
app.use("/home", homeRouter);

app.listen(process.env.APP_PORT, () =>
  console.log(`App listening on port ${process.env.APP_PORT}!`)
);
