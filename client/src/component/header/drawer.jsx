import { Box, Divider, Drawer, Typography} from "@mui/material";
import {RxCross2} from 'react-icons/rx'
import {Link} from 'react-router-dom'
const Drawerc=({open,setOpen})=>
{
    return(
        <>
            <Drawer open={open} onClose={!open} anchor={"right"}>
                <Box style={{width:300,textAlign:'center',marginTop:50}}>
                    <Box style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography style={{fontSize:25,paddingLeft:10}}>Hi</Typography>
                        <RxCross2 size={35} onClick={()=>setOpen(false)} style={{paddingRight:10,cursor:'pointer'}}/>
                    </Box>
                    <Divider style={{height:2,paddingTop:10}}/>
                    <Box style={{display:'flex',flexDirection:'column'}}>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10,paddingBottom:25,paddingTop:100}} to={"/"}>Home</Link>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10,paddingBottom:25}} to={"/"}>Men's</Link>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10,paddingBottom:25}} to={"/"}>Women's</Link>
                    <Link style={{textDecoration:'none',color:'#4D4D4D',fontFamily:'Helvetica',fontWeight:500,fontSize:22,marginRight:10,paddingBottom:25}} to={"/"}>Kid's</Link>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
};
export default Drawerc;