//Dependencias
//el objeto de conexion:
const sequelize = require('../config/seq')
//DataTypes de Sequelize
const { DataTypes } = require('sequelize')
//el modelo
const UserModel = require('../models/user')

//crear la entidad
const User = UserModel(sequelize , DataTypes)
//listar todos los user
exports.getAllUsers = async (req , res)=>{
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data" : users
        })
}

//Listar user por id
exports.getSingleUser = async (req , res)=>{
    // LLAMAR ID = ${req.params.id}
    //traer el usuario
    const singleUser = await User.findByPk(req.params.id);
    //resopnse con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data" : singleUser
        })
}

//Actualizar user por id
exports.updateUser = async (req , res)=>{
    await User.update( req.body, {
        where: {
          id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data" : singleUser
        })
}

//Borrar user por id
exports.deleteUser = async (req , res)=>{
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    res
        .status(200)
        .json({
            "success": true,
            "data" : singleUser
        })
}

//crear nuevo user
exports.createUser = async (req , res)=>{

        const newUser = await User.create(req.body)
        res
        .status(200)
        .json({
            "success": true,
            "data" : newUser
        })
}