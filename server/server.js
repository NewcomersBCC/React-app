require("dotnev").config();

const express = require("express");
const app = express();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_development", "root", "admin1234", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/api", (req, res) => {
  res.json({ users: ["yes sir"] });
});

app.get("/", (req, res) => res.send());

app.listen(process.env.APP_PORT, () =>
  console.log(`Example app listening on port ${process.env.APP_PORT}!`)
);
