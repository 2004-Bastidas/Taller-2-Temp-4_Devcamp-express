'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title:{
      type: DataTypes.STRING,

      allowNull: false,
      validate:{
        unique(value) {
          
          return Reviews.findOne({where:{title:value}})
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
      
    text:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El text debe estar presente'
        },
      },
    },
    rating: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El rating debe estar presente'
        },
        len: {
          args: [5,10],
          msg: "Rating minimo 5 y maximo 10 caracteres"
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
  },{
    sequelize,
    timestamps: false,
    modelName: 'Reviews',
  });
  return Reviews;
};