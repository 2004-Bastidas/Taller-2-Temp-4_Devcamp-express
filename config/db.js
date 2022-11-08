const sequelize = require ('./seq')
const colors =require('colors')

//Definir una función de conexion a la base de datos 

const connectDB = async ()=>{
    try {     
            //Conectarse a la base de datos 
            await sequelize.authenticate()
            console.log('Conectado a mysql'.bgMagenta.black)
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = connectDB 