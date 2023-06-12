import mongoose from "mongoose";
 const dataBase=async(PASSWORD)=>{
    const URL=`mongodb+srv://Admin:${PASSWORD}@cluster0.uqtuwmq.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL)
        console.log("database connected");
    }
    catch(err){
        console.log("error",err.message);
    }
}
export default dataBase
// "NiGpBOr2pcp5mdIN"