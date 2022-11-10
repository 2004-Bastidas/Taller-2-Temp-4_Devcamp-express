const express = require('express')
const {
    getAllBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
    
 } = require('../controllers/BootcampController')

//Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametros 
router.route('/')
.get(getAllBootcamps)
.post(createBootcamp)

//Crear ruta con parametros 
router.route('/:id')
.get(getSingleBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)

module.exports = router 
