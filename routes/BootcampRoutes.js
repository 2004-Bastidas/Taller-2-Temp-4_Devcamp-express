const express = require('express')

//Definir objeto de ruteo
const router = express.Router()

//listar todos los bootcamps

router.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "Aqui van a salir todos los bootcamps"
        })
})

//Listar bootcamp por id
router.get('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `Aqui va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})

//Actualizar bootcamps
router.put('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `Aqui va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
})

//Borrar bootcamp por id
router.delete('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `El bootcamp de id: ${req.params.id} fue eliminado`
        })
})

//crear nuevo bootcamp
router.post('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "Aqui vamos a registrar bootcamp"
        })
})

module.exports = router