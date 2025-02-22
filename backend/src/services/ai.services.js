
import { GoogleGenerativeAI } from "@google/generative-ai";
import  dotenv  from "dotenv";


dotenv.config({
   path:".env"
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
   systemInstruction:`
         You are an code reviewer , who have an expertise in development,
         you look for the code and find the problems and suggest the solution to devloper.
         
         you always try to find the best solution the solution developer and also try 
   
   `
 });

async function generateContent(prompt) {

    
const result = await model.generateContent(prompt);
    

     return result.response.text()
}


//const prompt = "Explain how AI works";

//console.log(result.response.text());

export default generateContent