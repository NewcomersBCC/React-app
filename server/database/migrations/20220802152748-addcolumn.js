"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("Users", "isHelper", Sequelize.BOOLEAN),
      queryInterface.addColumn("Users", "centreId", Sequelize.INTEGER),
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("Users", "centreId"),
      queryInterface.removeColumn("Users", "isHelper"),
    ]);
  },
};
