const express = require('express')
const {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
    
 } = require('../controllers/UserController')

//Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametros 
    router.route('/')
            .get(getAllUsers)
            .post(createUser)

//Crear ruta con parametros 
    router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)

module.exports= router 