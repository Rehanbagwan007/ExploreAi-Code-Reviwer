import { app } from "./src/app.js";
import  dotenv  from "dotenv";
import cors from 'cors'


dotenv.config({
   path:".env"
})

const Port = 2000





app.listen(Port,()=>{
   console.log(`Server is Running on http://localhost:${Port}`)
})