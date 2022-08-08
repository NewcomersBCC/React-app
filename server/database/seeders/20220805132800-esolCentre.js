"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "EsolCentres",
      [
        {
          centreName: "Esol Centre 1",
          address: "Laurel Drive",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 2",
          address: "Briarwood Drive",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 3",
          address: "Rose Street",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 4",
          address: "Forest Street",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 5",
          address: "King Street",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 6",
          address: "Route 1",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 7",
          address: "Cedar Lane",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 8",
          address: "Atlantic Avenue",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 9",
          address: "Club Road",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES9",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          centreName: "Esol Centre 10",
          address: "Williams Street",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          centreCode: "ES10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
