//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 
const {DataTypes, ValidationError} = require ('sequelize')

//Modelo
const ReviewsModel = require('../models/reviews')

//Crear la entidad
const Review = ReviewsModel(sequelize, DataTypes)

//Las rutas de Reviews 
// Listar todos los Reviews 
exports.getAllReviews = async (req, res)=>{
    try {
            //Traer los Reviews 
        const reviews = await Review.findAll();
            //Response con los datos 
        res
            .status(200)
            .json({
                "success": true,
                "data": reviews
            })
    } catch (error) {
        res
            .status(400)
            .json({
                "succes":   false,
                "error": error
            })
    }
}

// Listar Reviews por id
exports.getSingleReviews = async (req, res)=>{
    try {
        const SingleReviews = await Review.findByPk(req.params.id);
    //console.log(req.params.id)
        if(SingleReviews){
            res
        .status(200)
        .json({
            "success": true,
            "data": SingleReviews
            })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el Review no existe"
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

//Actualizar el  Review
exports.updateReviews = async (req, res)=>{
     //console.log(req.params.id)
     try {
        const SingleReviews = await Review.findByPk(req.params.id);
        if (!SingleReviews) {
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el review no existe"
                })  
            
        } else {
            await Review.update(req.body,  {
                where: {
                 id: req.params.id
                }
              });
             
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleReviews
                })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "succes":   false,
            "error": error
            })
    }
}

//Borrar Reviews
exports.deleteReviews = async (req, res)=>{
    //console.log(req.params.id)
    const SingleReviews = await Review.findByPk(req.params.id);
    try {
        if(SingleReviews){
            await Review.destroy({
                where: {
                    id: req.params.id
                }
              });
            
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleReviews
                })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el review no existe"
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

//Crear nuevo reviews
exports.createReviews = async (req, res)=>{
    try {
        const SingleReviews = await Review.findByPk(req.params.id);
        const newReviews = await Review.create(req.body);
        if (newReviews) {
            res
            .status(200)
            .json({
                "success": true,
                "data": newReviews
            })
            
        } else if(SingleReviews){
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el review ya existe"
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