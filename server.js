//1. Crear el ojeto express
const express = require('express')
//2. Citar klas depoendencias necesarias
const dotenv = require('dotenv')
const colors = require('colors') 
const connectDB = require('./config/db')
const listEndpoint = require('express-list-endpoints')
//los componentes de rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoutes')
const userRoutes = require('./routes/UserRoutes')


//3. Establecer archivo de configuración 
dotenv.config({
    path:'./config/config.env'
})
//console.log(process.env.PORT)

//Crear el objeto application
//para el servidor de desarrollo
const app = express()
//validar el objeto appplication
//para recibir datos en formato json
app.use(express.json())

//conexion a db
connectDB()

//Rutas de proyecto
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , courseRoutes)
app.use('/api/v1/users' , userRoutes)

//rutas de aplicacion
app.get('/' , (request, response )=>{
    response
        .status(200)
        .json({
            "success": true,
            "data" : "Request exitosa"
        })
})

//endpoints de diminio
//bootcamps

//imprimir la lista de endpoints 
// valids del proyecto
console.log(listEndpoint(app))



//ejecutar el servidor de desarrollo
// paarmetros
//      puerto de escucha - listen 
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor activo en el puerto 5000`.bgMagenta.black)
})

