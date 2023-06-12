
import women from '../model/womenModel.js'
export const getWomensProduct=async(req,res)=>
    {
        try{
            const item=await women.find()
            console.log(item);
            return res.status(200).send(item)
            
        }
        catch(err)
        {
            console.log(err.message);
        }
    }