'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'Veroniquita',
      email:'vcenteno8@misena.edu.co',
      password:'123456'
    },
    {
      username: 'Cami',
      email:'cami@misena.edu.co',
       password:'123'  
        },
      {
      username: 'Vale',
      email:'vale@misena.edu.co',
      password:'1456'  
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users',null, {});
   
  }
};
