'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert('Tags', [
      {
        name: 'Trump',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inspiration',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stock',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
