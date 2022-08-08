"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("EsolCentres", "centreCode", {
        allowNull: false,
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("EsolCentres", "centreCode"),
    ]);
  },
};
