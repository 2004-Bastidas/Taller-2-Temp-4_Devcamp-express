'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       //Crear la columna 'User_id' FK con users
    //Ad column: Parametros 
            //1.Tabla en la cual poner la columna 
            //2.Nombre de la nueva columna 
            //3.Opciones de la nueva columna 
            await queryInterface.addColumn('reviews', 
            'bootcamp_id',
            { 
              type: Sequelize.INTEGER,
              references:{
                model: 'bootcamps',
                key: 'id'
              },
              onUpdate:'CASCADE',
              onDelete: 'SET NULL '
            }
            ),
            await queryInterface.addColumn('reviews', 
            'user_id', 
            { 
              type: Sequelize.INTEGER,
              references:{
                model: 'users',
                key: 'id'
              },
              onUpdate:'CASCADE',
              onDelete: 'SET NULL '
            }
            )
  },

  async down (queryInterface, Sequelize) {
    //Metodo remove Column 
    //Parametros 
          //1.Tabla donde vas a remover 
          //2. La columna a eliminar 
          await queryInterface.removeColumn('reviews', 'bootcamp_id')
          await queryInterface.removeColumn('reviews','user_id')
  }

};
