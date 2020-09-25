// import packages
const express = require('express')
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const morgan=require('morgan')
dotEnv.config()
const port=process.env.PORT || 8000
const DB=process.env.DB_CONNECTION

// import routes
const userRouter=require('./routes/auth')

const app = express()

//Database connection
mongoose.connect(DB,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true})
        .then(()=>console.log(`DB is connected and server running on port ${port}`))
        .catch(err=>console.log(err))


//middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))
// routes Middlwares
app.use('/api/user/',userRouter)




app.listen(port)
  
