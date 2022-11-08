'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('courses', 
                                    [{ 
                                    title: 'ADSI',
                                    description: 'Courses for ADSI learning',
                                    weeks: 3,
                                    enroll_cost: 30000,
                                    minimum_skill: 'Advanced',
                                    bootcamp_id: 1
                                  },
                                      {
                                    title: 'design',
                                    description: 'Courses for design learning',
                                    weeks: 1,
                                    enroll_cost: 50000,
                                    minimum_skill: 'Intermediate',
                                    bootcamp_id: 2
                                      },
                                      {
                                    title: 'PHP',
                                    description: 'Courses for PHP learning',
                                    weeks: 5,
                                    enroll_cost: 70000,
                                    minimum_skill: 'ESSENTIAL',
                                    bootcamp_id: 3,
                                      }
                                    ], 
                                    {});
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('courses', null, {});
    
  }
};
