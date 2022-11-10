'use strict';

const sequelize = require('../config/seq');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weeks: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      enroll_cost: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      minimum_skill: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bootcamp_id: {
        type: sequelize.INTEGER,
        allowNull: false
      }
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};