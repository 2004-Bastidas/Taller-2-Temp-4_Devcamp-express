const mongoose   = require('mongoose')

//Modelo de bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Por favor, ingresa el nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "Te pasaste Crack, no se admiten bootcamps > 30"
        ],
    },
    description: {
        type: String,
        required: [
            true,
            'Por favor, ingrese la descripcion'
        ],
        maxlength: [
            500,
            "No cas, no se admiten descripciones > 500"
        ]
    },
    phone:{
        type: String,
        maxlength: [
            20,
            "Quién tiene un telefono de más de 20?"
        ]
    },
    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, ingrese email válido'
        ]
    },
    averageConst: Number,
    averageRating: {
        type: Number,
        min: [1, 'Calificación mínima: 1'],
        max: [10 , 'Calificación máxima: 10']
    } 
})

module.exports = mongoose.model('bootcamp' , BootcampsSchema)