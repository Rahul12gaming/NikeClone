import bcrypt from "bcrypt"
import mongoose from "mongoose";
const userModel=new mongoose.Schema({
    firstname:{
        type:String,
       required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname:{
        type:String,
       required:true,
        trim:true,
        min:5,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    email:{
        type:String,
       required:true,
    },
    password:{
        type:String,
        required:true
        
    }
   
});
userModel.methods.matchPassword=async function(enter){
    return await bcrypt.compare(enter,this.password)
}
userModel.pre("save",async function(){
    const salt=await bcrypt.genSalt();
    const hashedString=await bcrypt.hash(this.password,salt)
    this.password=hashedString
});
const User=mongoose.model('NewUser',userModel);
export default User;