import { Box,Typography,useMediaQuery,useTheme } from "@mui/material";
import {AiFillHeart,AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Footer = () => {
    const theme=useTheme();
   const match=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box style={{background:'black',marginTop:'auto',minHeight:'50vh',display:'block'}}>
        <Box style={{display:'flex',padding:50,justifyContent:'center',alignItems:'center'}}>
            <Typography className="typeWritertheme" style={{color:'#FFFFFF',fontWeight:600,fontSize:20}}>Made With <AiFillHeart color="red" size={20} /> Rahul Adhikari</Typography>
        </Box>
      <Box style={{display:'flex',padding:'10px 50px'}}>
        <Box>
           <Typography style={{color:'#FFFFFF',paddingBottom:10,fontWeight:600}}>BECOME A MEMBER</Typography>
           <Typography style={{color:'#FFFFFF',paddingBottom:10,fontWeight:600}}>BECOME A MEMBER</Typography>
           <Typography style={{color:'#FFFFFF',paddingBottom:10,fontWeight:600}}>ALREADY A MEMBERK</Typography>
           <Typography style={{color:'#FFFFFF',paddingBottom:10,fontWeight:600}}>SIGNUP FOR EMAIL</Typography>
           <Typography style={{color:'#FFFFFF',paddingBottom:10,fontWeight:600}}>SEND US FEEDBACK</Typography>
        </Box>
        {
            match?"":
            <Box style={{marginLeft:'35%'}}>
        <Typography style={{color:'white',fontWeight:600,marginBottom:10}}>GET HELP</Typography>
        <Typography style={{color:'gray',paddingBottom:5}}>Order Status</Typography>
        <Typography style={{color:'gray',paddingBottom:5}}>Delivery</Typography>
        <Typography style={{color:'gray',paddingBottom:5}}>Returns</Typography>
        <Typography style={{color:'gray',paddingBottom:5}}>Payment Options</Typography>
        </Box>
        }
        <Box style={{marginLeft:'auto'}}>
        
        <Link><AiFillGithub color="gray" size={50} style={{marginRight:10}}/></Link>
        <Link to={'https://www.linkedin.com/in/rahul-adhikari-3a6b1b239/'}><AiFillLinkedin color="gray" size={50} style={{marginRight:10}}/></Link>
        <Link><AiFillInstagram color="gray" size={50} style={{marginRight:10}}/></Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
