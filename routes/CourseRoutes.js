const express = require('express')

//Definir objeto de ruteo
const Crut = express.Router()

//listar todos los bootcamps

Crut.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "Aqui van a salir todos los cursos"
        })
})

//Listar bootcamp por id
Crut.get('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `Aqui va a salir el curso cuyo id es ${req.params.id}`
        })
})

//Actualizar bootcamps
Crut.put('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `Aqui va a actualizarse el curso cuyo id es ${req.params.id}`
        })
})

//Borrar bootcamp por id
Crut.delete('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `El Curso de id: ${req.params.id} fue eliminado`
        })
})

//crear nuevo bootcamp
Crut.post('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "Aqui vamos a registrar un nuevo curso"
        })
})

module.exports = Crut