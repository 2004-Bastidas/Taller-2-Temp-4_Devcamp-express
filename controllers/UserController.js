//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 
const {DataTypes, ValidationError} = require ('sequelize')

//Modelo 
const UserModel = require ('../models/user')

//Crear la entidad 
const User = UserModel(sequelize, DataTypes)

//Las rutas de users 
// Listar todos los users 
exports.getAllUsers = async (req, res)=>{
    try {
            //Traer los usuarios 
        const users = await User.findAll();
            //Response con los datos 
        res
            .status(200)
            .json({
                "success": true,
                "data": users
            })
    } catch (error) {
        res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error de conexion con el servidor"
            })
    }
    
}

// Listar users por id 
exports.getSingleUser = async (req, res)=>{
    try {
        const SingleUser = await User.findByPk(req.params.id);
    //console.log(req.params.id)
        if(SingleUser){
            res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
            })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el usuario no existe"
            })    
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "succes":   false,
            "error": "Error de conexion con el servidor"
            })
    }
    
}


//Actualizar el users 
exports.updateUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el usuario no existe"
                })  
            
        } else {
            await User.update(req.body,  {
                where: {
                 id: req.params.id
                }
              });
             
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleUser
                })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "succes":   false,
            "error": "Error de conexion con el servidor"
            })
    }
}


//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    try {
        if(SingleUser){
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
            
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleUser
                })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el usuario no existe"
            })  
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "succes":   false,
            "error": "Error de conexion con el servidor"
            })
    }
}

// Crear nuevo users 
exports.createUser = async (req, res)=>{
    try {
        const SingleUser = await User.findByPk(req.params.id);
        const newUser = await User.create(req.body);
        if (newUser) {
            res
            .status(200)
            .json({
                "success": true,
                "data": newUser
            })
            
        } else if(SingleUser){
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el usuario ya existe"
                })  
        }
    } catch (error) {
        if(error instanceof ValidationError){
            //Recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento)=> elemento.message )
            res
                .status(400)
                .json({
                    "succes":   false,
                    "error": errores
                })
        }else{
            res
                .status(400)
                .json({
                    "succes":   false,
                    "error": "Error de conexion con el servidor"
                })
        }
    }
    
} 


