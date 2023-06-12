
import men from '../model/menModel.js'
export const getMensProduct=async(req,res)=>
    {
        try{
            const item=await men.find()
            console.log(item);
            return res.status(200).send(item)
            
        }
        catch(err)
        {
            console.log(err.message);
        }
    }