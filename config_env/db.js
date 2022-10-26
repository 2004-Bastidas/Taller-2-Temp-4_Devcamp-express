const mongoose = require('mongoose')

//const uri = 'mongodb+srv://Bastidas:AndresBastidas@cluster0.irgqkc9.mongodb.net/bootcamps-sena/?retryWrites=true&w=majority'

const uri = 'mongodb://localhost:27017/bootcamp'

//Componente de conexxion a BD
// tipo: funcional

const connectDB = async() => {
    const conn =  await mongoose.connect(uri , { 
        useNewUrlParser : true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()