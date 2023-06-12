import cloth from '../model/clothModel.js';
export const getAll=async(req,res)=>
    {
        try{
            const item=await cloth.find()
            console.log(item);
            return res.status(200).send(item)
            
        }
        catch(err)
        {
            console.log(err.message);
        }
    }