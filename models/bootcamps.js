'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamps.init({
    name:{
      type: DataTypes.STRING,

      allowNull: false,
      validate:{
        unique(value) {
          
          return Bootcamps.findOne({where:{name:value}})
            .then((name) => {
              if (name) {
                throw new Error('Error hay mas de un nombre asi');
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
    phone:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El phone debe estar presente'
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: {
          args: true,
          msg:'El email no es valido'
        },
        notNull : {
          args: true,
          msg: 'El email debe estar presente'
        },
      },
    },
    average_rating:{
      type:DataTypes.INTEGER,
      allowNull: false,
        validate:{
          notNull : {
            args: true,
            msg: 'average_rating debe estar presente'
          },
        },
      },
    average_cost: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El average_cost debe estar presente'
        },
        len: {
          args: [5,10],
          msg: "average_cost minimo 5 y maximo 10 caracteres"
        },
      },
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull: false,
        validate:{
          notNull : {
            args: true,
            msg: 'El user_id debe estar presente'
          }
      },
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Bootcamps',
  });
  return Bootcamps;
};