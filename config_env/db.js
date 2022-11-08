const mongoose = require('mongoose')

//const uri = 'mongodb+srv://veronica2526:veronicacenteno25@cluster0.mcqkvk6.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'

const uri = 'mongodb://localhost:27017/bootcamps-sena'

//Componente de conexion a BD de tipo funcional 

const connectDB = async() =>{
    const conn = await mongoose.connect(uri , {
        useNewUrlParser : true, 
        useUnifiedTopology: true
    })

    console.log(`MongoDB conectado: ${conn.connection.host}`)
}

connectDB()