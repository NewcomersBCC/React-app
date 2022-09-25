import { DataTypes } from "sequelize";
import databaseInstance from "/Users/luantavares/Development/NewComers/React-app/server/config/database.js";
import esolCentre from "/Users/luantavares/Development/NewComers/React-app/server/app/Models/esolcentre.js";

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
    references: {
      model: "esolcentre",
      key: "id",
    },
  },
});

User.associate = async (models) => {
  await User.belongsTo(esolCentre, {
    foreignKey: "id",
  });
  esolCentre.associate(User);
};

User.associate();

export default User;
