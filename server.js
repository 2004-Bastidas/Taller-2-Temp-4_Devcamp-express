//1.Crear el objeto express 
const express = require('express')
//2. Citar las dependecncias necesarias 
const dotenv = require('dotenv')
const colors = require ('colors')
const connectDB = require ('./config/db')
const listEndPoint = require('express-list-endpoints')
// Los componentes de  ruta
const bootcampRoutes = require('./routes/BootcampRoutes') 
const courseRoutes = require('./routes/CourseRoutes')
const userRoutes = require ('./routes/UserRoutes')
//3. Establecer archivo de configuracion 
dotenv.config({
    path: './config/config.env'
})
console.log(process.env.PORT)

//Crear el objeto aplicación para el servidor de desarrollo 
const app = express()

//Validar el objeto aplicacion para recicbir datos en formatp JSON
app.use(express.json())

// Conexion a la base de datos 
connectDB()

//rutas de proyecto 
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , courseRoutes)
app.use('/api/v1/users' , userRoutes)
//Endpoint de aplicacion  
//EndPoints de dominio  oo
//Imprimir la lista de endpoints validas por el proyecto 
console.log(listEndPoint(app))

//Ejecutar el servidor de desarrollo 
//Parametros 
            //Puertos de escucha - listen 
app.listen(process.env.PORT ,()=>{
    console.log(`Servidor activo en puerto 5000`.bgMagenta.black)
})