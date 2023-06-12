import {useNavigate} from 'react-router-dom'
import {Button,Divider, Menu, MenuItem, Typography} from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {BsCart2,BsFillCaretDownFill} from 'react-icons/bs'
import {FaRegHeart} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {useToast} from '@chakra-ui/react'
import {RiLuggageCartLine,RiCoupon3Line} from 'react-icons/ri'
import { logoutFromAccount } from '../../redux/features/auth/authAction';
const LogOut=()=>
{
const navigate=useNavigate()
const [open,setOpen]=useState(false)
const user=useSelector(state=>state.authReducer.user.firstname)
const dispatch=useDispatch()
const toast=useToast()
const handelClick=(event)=>
{
    setOpen(event.currentTarget)
   
}
const handleClose=()=>
{
    setOpen(false)
}
const handleLogout=()=>
{
    dispatch(logoutFromAccount(toast))
}
    return (
        <>
            <Box>
                    <Button onClick={handelClick} style={{background:'transparent',color:'#FFFFFF',fontWeight:600}}> <BsFillCaretDownFill/>{user}</Button>
                <Menu
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}>
                    <MenuItem>
                        <Box style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',fontSize:17}}>{user}<Box/>
                        <Typography style={{paddingTop:5,paddingBottom:10}} onClick={()=>{navigate('/wishlist')}}><FaRegHeart style={{marginRight:5,textAlign:'center'}}/> Whislist </Typography>
                        <Typography style={{paddingTop:5,paddingBottom:10}} onClick={()=>{navigate('/orders')}}><RiLuggageCartLine style={{marginRight:5,textAlign:'center'}}/> Orders </Typography>
                        <Typography style={{paddingTop:5,paddingBottom:10}} onClick={()=>{navigate('/cart')}}><BsCart2 style={{marginRight:5,textAlign:'center'}}/>Cart </Typography>
                        <Typography style={{paddingTop:5,paddingBottom:10}} onClick={()=>{navigate('/logout')},handleLogout}><FiLogOut style={{marginRight:5,textAlign:'center'}}/>Logout </Typography>
                        </Box>
                    </MenuItem>
                </Menu>
            </Box>
        </>
           
    );
}
export default LogOut;          