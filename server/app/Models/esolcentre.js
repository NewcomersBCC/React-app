const { DataTypes } = require("sequelize");
const databaseInstance = require("../../config/database");
const user = require("./user");

const esolCentre = databaseInstance.define("esolcentre", {
  centreName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

esolCentre.hasMany(user, {
  foreignKey: "id",
});
esolCentre.belongsTo(user);

export default esolCentre;
