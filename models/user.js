'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /** 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      
      allowNull: false,
      validate:{
        unique(value) {
          
          return User.findOne({where:{username:value}})
            .then((username) => {
              if (username) {
                throw new Error('Error hay mas de un nombre asi');
              }
            })
        },
        isAlpha: {
          args: true,
          msg: 'El username debe tener solo letras'
        },
        notNull : {
          args: true,
          msg: 'El username debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'El username no debe ser vacio'
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
    password:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : {
          args: true,
          msg: 'El password debe estar presente'
        },
        len: {
          args: [5,10],
          msg: "password minimo 5 y maximo 10 caracteres"
        }
      },
     },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};