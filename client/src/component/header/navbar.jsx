import {Link} from "react-router-dom"
import logo from "../../assest/nike-logo.png"
import {AppBar, Box,styled, Toolbar,useTheme,useMediaQuery} from '@mui/material'
import Drawerc from "./drawer"
import {AiOutlineHeart} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import {SiJordan} from 'react-icons/si'
import {HiOutlineBars3} from 'react-icons/hi2'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Auth } from "../auth/Auth"
import LogOut from "../auth/Logout"
import { setItemSession } from "../../utils/sessionStorage"
import { setNavbarPath } from "../../redux/features/path/pathAction"


const MiddleComponent=styled(Box)`
`
const Navbar=()=>
{
    const [open,setOpen]=useState(false)
    const dispatch=useDispatch()
    const theme=useTheme()
    const match=useMediaQuery(theme.breakpoints.down("md"))
    console.log(match);
    const {token}=useSelector(state=>state.authReducer)
    const handlePath = ({ target: { name } }) => {
        
        dispatch(setNavbarPath(name));
        setItemSession("path", name);
      };
    return (
        <>
        {/* <Box style={{background:'#7e7e7e',margin:-8,paddingTop:'10px'}}>
        <Box style={{marginLeft:'auto',position:'unset'}}>
                <Link to={"/login"} style={{color:'#FFFFFF',marginRight:'10px',textDecoration:'none'}}>Login</Link>
                <Link to={"/singin"} style={{color:'#FFFFFF'}}>singin</Link>
            </Box>
        </Box> */}
        <AppBar style={{background:'#FFFFFF',position:'unset'}}>
            <Toolbar style={{background:'#f5f5f5',minHeight:'36px',display:'flex',justifyContent:'space-between'}}>
                <Box>
                    <SiJordan size={30} style={{padding:'10px',color:'black'}}/>
                </Box>
                <Box>
                {
                    token?<LogOut/>:<Auth/>
                }
                </Box>
            </Toolbar>
            <Toolbar style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                <Box>
                    <Link to={'/'}>
                    <img src={logo} alt="logo" style={{width:100,height:40}}/>
                    </Link>
                </Box>
                <Box>
                    {
                        match?" "
                        :
                       <MiddleComponent>
                         <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Source Sans Pro',fontSize:16,marginRight:10,color:'#1A202C'}} to={"/"} name={"/"} onClick={handlePath}>Home</Link>
                        <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Source Sans Pro',fontSize:16,marginRight:10,color:'#1A202C'}} to={"/mens"} name={"men"} onClick={handlePath}>Men's</Link>
                        <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Source Sans Pro',fontSize:16,marginRight:10,color:'#1A202C'}} to={"/womens"} name={"women"} onClick={handlePath}>Women's</Link>
                        <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Source Sans Pro',fontSize:16,marginRight:10,color:'#1A202C'}} to={"/kids"} name={"kid"} onClick={handlePath}>Kid's</Link>
                        <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Source Sans Pro',fontSize:16,marginRight:10,color:'#1A202C'}} to={"/allproduct"} name={"allproduct"} onClick={handlePath}>All Product</Link>
                       </MiddleComponent>
                        
                    }
                    {/* <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10}} to={"/"}>Home</Link>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10}} to={"/"}>Men's</Link>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10}} to={"/"}>Women's</Link>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10}} to={"/"}>Kid's</Link> */}
                </Box>
                <Box style={{display:'flex'}}>
                    {
                        match?
                        <>
                        <Link to={'/singin'}><AiOutlineHeart color="black" size={30} style={{marginRight:10}}/></Link>
                        <Link to={'/cart'}><BiShoppingBag color="black" size={30}/></Link>
                       <HiOutlineBars3 color="black" size={30} style={{marginLeft:10,cursor:'pointer'}} onClick={()=>setOpen(true)}/>
                       <Drawerc open={open} setOpen={setOpen}/>
                       </>
                       :
                       <>
                       <Link to={'/singin'}><AiOutlineHeart color="black" size={30} style={{marginRight:10}}/></Link>
                        <Link to={'/cart'}><BiShoppingBag color="black" size={30}/></Link>
                       </>
                    }
                </Box>
            </Toolbar>
        </AppBar>
        
    </>    
    )
}
export default Navbar;