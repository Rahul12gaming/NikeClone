
import Kids from '../model/kidsModel.js'
export const getKidsProduct=async(req,res)=>
    {
        try{
            const item=await Kids.find()
            console.log(item);
            return res.status(200).send(item)
            
        }
        catch(err)
        {
            console.log(err.message);
        }
    }