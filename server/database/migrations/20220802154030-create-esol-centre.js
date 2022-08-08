"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EsolCentres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      centreName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      centreCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("EsolCentres");
  },
};
