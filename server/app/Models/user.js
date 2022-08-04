import { DataTypes } from "sequelize";
import databaseInstance from "/Users/luantavares/Development/NewComers/React-app/server/config/database.js";

const User = databaseInstance.define("user", {
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  isHelper: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  centreID: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
});

/* this.belongsTo(esolcentre, {
  as: "centreID",
  foreignKey: "id",
}); */

export default User;
