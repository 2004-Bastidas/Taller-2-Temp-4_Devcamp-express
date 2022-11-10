const express = require('express')
const {
    getAllReviews,
    getSingleReviews,
    updateReviews,
    deleteReviews,
    createReviews
    
 } = require('../controllers/ReviewController')

//Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametros 
    router.route('/')
            .get(getAllReviews)
            .post(createReviews)

//Crear ruta con parametros 
    router.route('/:id')
            .get(getSingleReviews)
            .put(updateReviews)
            .delete(deleteReviews)

module.exports= router 