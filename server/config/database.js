const { Sequelize } = require("sequelize");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
const dbType = process.env.DB_TYPE;

module.exports = new Sequelize(database, user, password, {
  host: host,
  dialect: dbType,
});
