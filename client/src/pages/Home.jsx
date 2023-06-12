import {Box,Button,Typography,Grid} from "@mui/material";
import vid from "../assest/Nike-video.mp4";
import { AspectRatio } from "@mui/joy";
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../redux/features/home/homeAction.js";
import { useEffect } from "react";
import { ClothSection } from "../component/home/clothSection";
import { Loading } from "../component/loading/loading";
import { Error } from "../component/loading/error";

const Home = () => {
    const dispatch=useDispatch();
    const {loading,error,cloth}=useSelector(state=>state.homeReducer)
    const handlePath=()=>{

    }
    // const loading=false
    // Api Calling for Getting data
    useEffect(()=>
    {
        dispatch(getData())
    },[])
 
  return loading ? (
    <Loading/>
  ):error?(
    <Error/>
  ):(
    <Box style={{ marginTop: 150 }}>
      <Box style={{ width: "89%", objectFit: "cover", margin: "auto" }}>
        <AspectRatio ratio={1.92 / 1}>
          <video
            autostart="autostart"
            preload="auto"
            tabIndex="-1"
            loop={"active"}
            playsInline={"playInline"}
            role="application"
            autoPlay="autoPlay"
          >
            <source src={vid} type="video/mp4"></source>
          </video>
        </AspectRatio>
      </Box>
      <Box
        style={{
          marginTop: 6,
          marginBottom: 9,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography>Nike Invincible</Typography>
          <Typography
            variant="h1"
            style={{
              fontWeight: 600,
              letterSpacing: "-3px",
              fontSize: "72px",
              fontFamily: "heading",
            }}
          >
            FEEL IT TO BELIEVE IT
          </Typography>
          <Typography>
            Introducing Lightweight ZoomX cushioning through every--run in the
            Nike Incincible 3.
          </Typography>
        </Box>
        <Box style={{ marginTop: 5 }}>
          <Button
            style={{
              background: "black",
              color: "white",
              padding: "6px 20px",
              borderRadius: 30,
              alignItems: "center",
             
            }}
            onClick={handlePath}
          >
            Shop
          </Button>
          <Button
            style={{
              background: "black",
              color: "white",
              padding: "6px 20px",
              borderRadius: 30,
              alignItems: "center",
              marginLeft:5
            }}
            onClick={handlePath}
          >
            Watch
          </Button>
        </Box>
        <Typography variant="h4" style={{marginTop:20,marginBottom:10}}>Featured</Typography>
        <Grid container style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
             <Grid item lg={6} md={6} sm={12} xs={12} >
                 <Box style={{
                    background:"url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/a57ccd32-6782-414c-bcd2-5a2ff23671c1/nike-just-do-it.png) center/contain no-repeat ",
                   
                    width:'100%',
                    height:650,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    
                }}>
                  
                    <Typography variant="h5" style={{color:'white'}}>Valentine's Day Looks</Typography>
                    <Typography variant="h4" style={{color:'white'}}>Partner Up and Reach those Goals</Typography>
                    <Box style={{marginTop:5}}> 
                        <Button style={{background:'white',color:'black',padding:'6px 20px',borderRadius:20,fontWeight:0}}>Explore</Button>
                        <Button style={{background:'white',color:'black',padding:'6px 20px',borderRadius:20,fontWeight:0,marginLeft:20}}>Top 10 Gifts</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} >
                <Box style={{
                    background:"url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/c1c2541d-f4b2-4fc0-b12b-dec2514661c2/nike-just-do-it.png) center/contain no-repeat",
                    width:'100%',
                   height:650,
                    
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    
                }}>
                    <Typography variant="h5" style={{color:'white'}}>Nike App Early Access</Typography>
                    <Typography variant="h4" style={{color:'white'}}>Nike Air Dunk Jumbo</Typography>
                    <Box style={{marginTop:5}}> 
                        <Button style={{background:'white',color:'black',padding:'6px 20px',borderRadius:20,fontWeight:0}}>Get it First</Button>
                        
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </Box>
         <Box>
            {cloth.map((data,index)=>(
                <ClothSection key={index} {...data}/>
            ))}
         </Box>
      </Box>
       
    
  ) 
};
export default Home;
