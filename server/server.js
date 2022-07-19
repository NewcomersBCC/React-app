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

app.get("/api", (req, res) => {
  res.json({
    users: [{ name: "Luan" }, { name: "Anishaa" }],
  });
});

//User routes

app.use("/user", require("./routes/user"));

app.listen(process.env.APP_PORT, () =>
  console.log(`Example app listening on port ${process.env.APP_PORT}!`)
);
