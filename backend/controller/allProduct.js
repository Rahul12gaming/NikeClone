
import allProduct from '../model/allProductModel.js'
export const getAllProduct=async(req,res)=>
    {
        try{
            const item=await allProduct.find()
            console.log(item);
            return res.status(200).send(item)
            
        }
        catch(err)
        {
            console.log(err.message);
        }
    }