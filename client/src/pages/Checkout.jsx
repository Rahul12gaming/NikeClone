import { Grid,styled } from "@mui/material"
import { useState } from "react"
import { CheckoutForm } from "../component/checkout/CheckoutForm"
import { CheckoutOrderSummary } from "../component/checkout/CheckoutOrderSummary"

import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {toast,ToastContainer} from 'react-toastify'
import { initPayment } from "./payment/razorpay"
const Container=styled(Grid)(({theme})=>({
    paddingTop:100,
    paddingLeft:100,
    [theme.breakpoints.down('md')]:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        maxWidth:'unset'
    }
}))
export const Checkout=()=>
{
    const navigate=useNavigate()
    const dispatch=useDispatch() 
    const init={
        firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    locality: "",
    pinCode: "",
    state: "",
    country: "",
    email: "",
    mobile: "",
    }
    const {orderSummary,cartProducts}=useSelector(state=>state.cartReducer)
    const [form,setForm]=useState(init)
    const handleInputChange=({target:{name,value}})=>
    {
        setForm({...form,[name]:value})
        console.log(form)
    }
    
    
    const handleFormSubmit=async (e)=>
    {  
       e.preventDefault();

        
       const {data}=await axios.post("http://localhost:8000/api/payment/order",
       {amount:orderSummary.total})
       console.log(data)
        initPayment(form,data,orderSummary,cartProducts,dispatch,navigate)
        
    }
    return (
        <Container container xl={12} md={12} sm={12} xs={12} spacing={10}>
            <Grid item xl={7} md={7} sm={12} xs={12} paddingTop={0}>
            <CheckoutForm onChange={handleInputChange}/>
            </Grid>
            <Grid item xl={5} md={5} sm={12} xs={12} paddingTop={0}>
                <CheckoutOrderSummary onClick={handleFormSubmit}/>
            </Grid>
            

        </Container>
    )
}