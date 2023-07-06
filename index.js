import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js'

const app = express()
const PORT= 5000

app.use(express.json())
app.use('/users',userRoutes)

app.get('/',(req,res)=>{ res.send('Home Page')})

app.listen(PORT,()=>{
    console.log(`App is Listening on Port ${PORT}`); 
})
