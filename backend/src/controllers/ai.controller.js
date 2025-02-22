import generateContent from "../services/ai.services.js"
export const aiResponse =async (req,res)=>{


    try{
    const code = req.body.code
   
    
   

    if(!code){
        return res.status(401).json({
            message:"Propmt field Required"
        })
    }


    const response = await generateContent(code)

    res.send(response)
    }catch(err){
        if(err){
            console.log(err)
        }
    }


}
