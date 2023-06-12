import { Box,  Grid, Typography } from "@mui/material";
import { ImageModal } from "../component/Description/ImageModal";
import { NewButton } from "../component/Description/NewButton";
import {Divider} from '@chakra-ui/react'
import { getItemSession } from "../utils/sessionStorage";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { cartRequest } from "../redux/features/cart/cartAction";
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const Description = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate() 
  const data = getItemSession("product")
  const {
    title,
    gender,
    description,
    category,
    price,
    size,
    color,
    rating,
    img,
  } = data;
  const handleAddToCart=()=>
  {
    
      dispatch(cartRequest({...data,quantity:1}));
      toast.success('Item Added to Cart', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
      navigate("/cart")
      
  }
  return (
    <>
    <Grid container justifyContent={'center'} style={{ paddingTop: 50 }} columnGap={4}  >
      <ImageModal img={img}/>
      <Grid item lg={4} md={4} sm={10} xs={9} >
        <Box style={{paddingRight:20}}>
          <Typography
            style={{
              fontSize: 29,
              fontFamily: "Source Sans Pro",
              overflowWrap: "break-word",
              color: "#1A202C",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              fontFamily: "Source Sans Pro",
              overflowWrap: "break-word",
              color: "#1A202C",
            }}
          >
            {description}
          </Typography>
          <Typography
            style={{
              fontSize: 22,
              marginTop: 20,
              fontFamily: "Source Sans Pro",
              overflowWrap: "break-word",
              color: "#1A202C",
            }}
          >
             ₹{price}
          </Typography>
          <Typography style={{ color: "gray" }}>
            incl. of taxes and duties
          </Typography>
          <NewButton
            click={handleAddToCart}
            name={"Add to Bag"}
            bgColor={"black"}
            color={"white"}
            hoverBg={"#1e1e1e"}
            borderColor={"transparent"}
          />
            
          <NewButton
          name={"Favourite"}
          bgColor={"white"}
          color={"black"}
          hoverBorder={"black"}
          borderColor={"#cecdce"}/>
          
          <Divider style={{marginBottom:10}}/>
          <Typography style={{textDecoration:'underline',fontSize:18,color:'#1A202c',marginBottom:10}}>Product Details</Typography>
            <>
                <Typography style={{fontSize:18,color:'#1A202C'}}>Gender:{gender}</Typography>
                <Typography>Category:{category}</Typography>
                <Typography>Color:{color}</Typography>
                <Typography>Ratings:{rating}</Typography>
            </>
        </Box>
      </Grid>
    </Grid>
    
    </>
  );
};
