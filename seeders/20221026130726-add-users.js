'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
     await queryInterface.bulkInsert('users', [
                                                {
                                                  username: 'B de Bastidas',
                                                  email: "ammartinez8243@misena.edu.co",
                                                  password: "coto"
                                                },
                                                {
                                                  username: 'a de Andres',
                                                  email: "andres@misena.edu.co",
                                                  password: "toco"},
                                                {
                                                  username: 'M de Mauricio',
                                                  email: "mau@misena.edu.co",
                                                  password: "octo"
                                                }
                                              ] , {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
