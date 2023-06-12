import express from 'express';
import dataBase from './config/db.js';
import router from './routes/Routes.js';
import dotenv from 'dotenv'
import bodyParser from "body-parser"
import cors from 'cors'
import crypto from 'crypto'
import razorpay from 'razorpay'
import path from 'path';
const app=express();
let order_id;
dotenv.config()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use('/',router)
app.use("/api/payment/order",async (req,res)=>{
    
    try{
       
        const instance=new razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        })
        const options = {
            amount: req.body.amount* 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
          };
          instance.orders.create(options,(error,order)=>{
            if (error) {
                console.log(error);
                return res
                  .status(500)
                  .json({ message: "Something went wrong", status: "Failed" });
              }
              order_id = order.id;
              res.status(201).json(order);
              console.log(order)
              
              
          })
    }
    catch(err)
    {
        console.log(err)
    }
})
app.use("/api/payment/verify",async (req,res)=>{
    try{
        const {razorpay_payment_id, razorpay_signature} =req.body
        const sign = order_id + "|" + razorpay_payment_id;

        const expectedSign = crypto
          .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
          .update(sign.toString())
          .digest("hex");
    
        if (razorpay_signature === expectedSign) {
          return res.status(201).json({ message: "Payment verified successfully" });
        } else {
          return res.status(400).json({ message: "Invalid signature sent!" });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
    });
const PASSWORD=process.env.DB_PASSWORD;
const port=process.env.PORT||6000;

dataBase(PASSWORD)
app.get('/',(req,res)=>{
  app.use(express.static(path.resolve(__dirname,'../client','build')))
  res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
})
app.listen(port,()=>{
    console.log("server started");
})