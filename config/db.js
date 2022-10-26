const sequelize = require('./seq')
const colors = require('colors')
const { Datatypes } = require('sequelize')

//crear instancia de el modelo User
const UserModel = require('../models/user')
const User = UserModel (sequelize, Datatypes)
 
//definir funcon de conexion a la base
// de datos

const connectDB = async ()=> {
    try {
        //conectarse a la bd
        await sequelize.authenticate()
        console.log('conectado a mysql'.bgMagenta.black)   
        const jane = await User.create(
            { username: "El Bacbaro", 
              email: "grabandoconel@gmail.com", 
              password: "1234" 
            });
        console.log("Jane's auto-generated ID:", jane.id);
        
    } catch (error) {
        console.log(error)       
    }
    
}

connectDB()