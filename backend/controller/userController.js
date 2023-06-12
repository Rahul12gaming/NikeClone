import jwt from 'jsonwebtoken'
import User from "../model/userModel.js"
export const singup=async(req,res)=>
{
    try
    {
        let user= await User.findOne({username:req.body.username})
        
        if(user)
        { 
            return res.status(401).json({message:"user already exist"})
        }
        user=await User.create(req.body)
        const token=jwt.sign({user},"1234")
        console.log(user);
        return res.status(200).json({user,token})
        
    }
    catch(err)
    {
        res.send(err.message)
    }
}
export const login=async(req,res)=>
{
    try{
        const data=req.body
        const Check=await user.findOne({username:req.body.username});
        const token=jwt.sign({Check},"1234")
        if(Check && await Check.matchPassword(req.body.password))
        {
            return res.status(200).json({message:data,token})
        }
        else
        {
            return res.status(401).json({message:"wrong user"})
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
        console.log(err.message);
    }
}