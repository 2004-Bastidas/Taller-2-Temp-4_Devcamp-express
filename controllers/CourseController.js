//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 
const {DataTypes, ValidationError} = require ('sequelize')

//Modelo
const CourseModel = require('../models/courses')

//Crear la entidad
const Course = CourseModel(sequelize, DataTypes)

//Las rutas de courses 
// Listar todos los courses 
exports.getAllCourses = async (req, res)=>{
    try {
            //Traer los cursos 
        const courses = await Course.findAll();
            //Response con los datos 
        res
            .status(200)
            .json({
                "success": true,
                "data": courses
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
exports.getSingleCourse = async (req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
    //console.log(req.params.id)
        if(SingleCourse){
            res
        .status(200)
        .json({
            "success": true,
            "data": SingleCourse
            })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el curso no existe"
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


//Actualizar el course 
exports.updateCourse = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el usuario no existe"
                })  
            
        } else {
            await Course.update(req.body,  {
                where: {
                 id: req.params.id
                }
              });
             
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleCourse
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

//Borrar users 
exports.deleteCourse = async (req, res)=>{
    //console.log(req.params.id)
    const SingleCourse = await Course.findByPk(req.params.id);
    try {
        if(SingleCourse){
            await Course.destroy({
                where: {
                    id: req.params.id
                }
              });
            
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleCourse
                })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el curso no existe"
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

// Crear nuevo course 
exports.createCourse = async (req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        const newCourse = await Course.create(req.body);
        if (newCourse) {
            res
            .status(200)
            .json({
                "success": true,
                "data": newCourse
            })
            
        } else if(SingleCourse){
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
