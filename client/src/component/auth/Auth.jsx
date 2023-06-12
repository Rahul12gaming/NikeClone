import { Box, Button, Dialog, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { LoginForm } from "./LoginForm"
import { SingupForm } from "./SingupForm"
import {RxCross2} from 'react-icons/rx'
import { showLoginPage } from "../../redux/features/auth/authAction"

export const Auth=()=>
{
    const isLogin=useSelector(state=>state.authReducer.isLogin)
    const isReset=useSelector(state=>state.authReducer.isReset)
    const [open,setOpen]=useState(false)
    const [close,setClose]=useState(false)
    const dispatch=useDispatch()
    const handleClick=()=>
    {
        setOpen(true)
        
    }
    const handleClose=()=>
    {
        setOpen(false)
        
    }
    const displayLogin=()=>
    {
        dispatch(showLoginPage())
    }

    return(
        <>
            <Box>
                <Button onClick={handleClick} style={{background:'transparent',color:'black',textTransform:'none',fontWeight:600}}>Sing Up</Button>
                <Dialog open={open} >
                    <RxCross2 onClick={handleClose} style={{marginLeft:'auto',paddingRight:20,paddingTop:10,cursor:'pointer'}} size={30}/>
                
                  <Box style={{minWidth:300}}>
                  <Typography style={{fontWeight:600,fontSize:28,textAlign:'center',padding:20}}>
                    {
                        isLogin?"YOUR ACCOUNT FOR EVERYTHING NIKE ":isReset?"RESET PASSWORD":"BECOME A NIKE MEMBER"
                    }
                  </Typography>
                   <Box style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:50,paddingRight:50,marginTop:5}}>
                   {
                        isLogin?<LoginForm />:isReset?"rs":<SingupForm />
                    }
                   </Box>
                   <Typography style={{textAlign:'center'}}>
                   {
                    isLogin?"NOT A MEMBER":isReset?" or Return to":"ALREADY A MEMBER"
                   }
                   </Typography>
                   <Typography onClick={displayLogin} style={{textAlign:'center',cursor:'pointer',textDecoration:'underline'}}>
                    {
                        isLogin?"Sing up":"Login"
                    }
                   </Typography>

                  </Box>
                  
                </Dialog>
            </Box>
        </>
    )
}