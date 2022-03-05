'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tables', [
      {
        name: 'table 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'table 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'table 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'table 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'table 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tables', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
