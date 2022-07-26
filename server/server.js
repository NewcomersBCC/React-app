require("dotenv").config();
const databaseInstance = require("./config/database.js");
const express = require("express");
const app = express();

/* Database connection */

try {
  databaseInstance.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(express.json());

//User routes
app.use("/user", require("./app/Routes/user"));

app.listen(process.env.APP_PORT, () =>
  console.log(`Example app listening on port ${process.env.APP_PORT}!`)
);
