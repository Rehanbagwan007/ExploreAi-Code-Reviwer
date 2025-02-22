import express from 'express'
import { Airouter } from './routes/ai.routes.js'
import cors from 'cors'




 export const app = express()
 app.use(express.json())

 app.get("/" , (req,res)=>{
    res.send("Hello World")
 })

 
 
 const corsPolicy = {
    origin:"http://localhost:5173",
    credentials:true,
 }
 
 app.use(cors(corsPolicy))
 


 app.use("/api/v1/Explore" , Airouter)








