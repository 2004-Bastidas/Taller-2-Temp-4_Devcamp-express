//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 
const {DataTypes, ValidationError} = require ('sequelize')

//Modelo
const BootcampModel = require('../models/bootcamps')

//Crear la entidad
const Bootcamp = BootcampModel(sequelize, DataTypes)

//Las rutas de bootcamp 
// Listar todos los bootcamp 
exports.getAllBootcamps = async (req, res)=>{
    try {
            //Traer los cursos 
        const bootscamps = await Bootcamp.findAll();
            //Response con los datos 
        res
            .status(200)
            .json({
                "success": true,
                "data": bootscamps
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

// Listar bootcamp por id 
exports.getSingleBootcamp = async (req, res)=>{
    try {
        const SingleBootcamp = await Bootcamp.findByPk(req.params.id);
    //console.log(req.params.id)
        if(SingleBootcamp){
            res
        .status(200)
        .json({
            "success": true,
            "data": SingleBootcamp
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
exports.updateBootcamp = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleBootcamp = await Bootcamp.findByPk(req.params.id);
        if (!SingleBootcamp) {
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el usuario no existe"
                })  
            
        } else {
            await Bootcamp.update(req.body,  {
                where: {
                 id: req.params.id
                }
              });
             
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleBootcamp
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
exports.deleteBootcamp = async (req, res)=>{
    //console.log(req.params.id)
    const SingleBootcamp = await Bootcamp.findByPk(req.params.id);
    try {
        if(SingleBootcamp){
            await Bootcamp.destroy({
                where: {
                    id: req.params.id
                }
              });
            
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleBootcamp
                })
        }else{
            res
        .status(200)
        .json({
            "succes":   false,
            "error": "Error el bootcamp no existe"
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
exports.createBootcamp = async (req, res)=>{
    try {
        const SingleBootcamp = await Bootcamp.findByPk(req.params.id);
        const newBootcamp = await Bootcamp.create(req.body);
        if (newBootcamp) {
            res
            .status(200)
            .json({
                "success": true,
                "data": newBootcamp
            })
            
        } else if(SingleBootcamp){
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el bootcamp ya existe"
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
