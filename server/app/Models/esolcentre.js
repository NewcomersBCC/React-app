import { DataTypes } from "sequelize";
import databaseInstance from "/Users/luantavares/Development/NewComers/React-app/server/config/database.js";
import user from "/Users/luantavares/Development/NewComers/React-app/server/app/Models/user.js";

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
  centreCode: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

/* esolCentre.hasMany(user, {
  foreignKey: "id",
});
esolCentre.belongsTo(user); */

export default esolCentre;
