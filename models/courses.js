'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title:{
      type: DataTypes.STRING,

      allowNull: false,
      validate:{
        unique(value) {
          
          return Courses.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Error hay mas de un titulo asi');
              }
            })
        },
        notNull : {
          args: true,
          msg: 'El title debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'El title no debe ser vacio'
        },
      },
    }, 
    description:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El description debe estar presente'
        },
      },
    },
    weeks:{
      type:DataTypes.INTEGER,
      allowNull: false,
        validate:{
          notNull : {
            args: true,
            msg: 'weeks debe estar presente'
          },
        },
      },
    enroll_cost: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El enroll_cost debe estar presente'
        },
        len: {
          args: [5,10],
          msg: "enroll_cost minimo 5 y maximo 10 caracteres"
        },
      },
    },
    minimum_skill:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El minimum_skill debe estar presente'
        },
      },
    },
    bootcamp_id:{
      type:DataTypes.INTEGER,
      allowNull: false,
        validate:{
          notNull : {
            args: true,
            msg: 'El bootcamp_id debe estar presente'
          }
        },
      },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Courses',
  });
  return Courses;
};