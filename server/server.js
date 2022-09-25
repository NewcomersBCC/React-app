import "dotenv/config";
import databaseInstance from "./config/database.js";
import express from "express";
const app = express();
import router from "./app/Routes/user.js";

/* Database connection */

try {
  databaseInstance.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(express.json());

//User routes
app.use("/user", router);

app.listen(process.env.APP_PORT, () =>
  console.log(`Example app listening on port ${process.env.APP_PORT}!`)
);
