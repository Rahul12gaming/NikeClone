import {Box, Typography} from '@mui/material'
import { AiOutlineStar } from "react-icons/ai";
import { shortString } from '../../utils/extraFunctions';

export const ProductDisplayBox=({ title, description, color, rating, price, size, gender, img, onClick })=>
{
    return (
        <Box style={{display:'flex',flexDirection:'column'}} onClick={onClick}>
            <Box style={{overflow:'hidden'}}>
                <img src={img[0]} className='imgAnimation' style={{maxWidth:'100%',height:'auto'}}/>
            </Box>
            <Box >
                <Box style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
  
  
                    <Typography style={{fontSize:18,fontWeight:600}}>{shortString(title)}</Typography>
                    <Box style={{display:'flex',alignItems:'center',fontSize:18}}>
                        <AiOutlineStar />
                        <Typography style={{paddingLeft:5,fontSize:18}}>{rating}</Typography>
                    </Box>
                     
                </Box>
            </Box>
            <Typography style={{fontSize:17,color:'gray'}}>{shortString(description,20)}</Typography>
            <Typography style={{fontSize:17,color:'gray'}}>{size.join(", ")}</Typography>
            <Typography style={{fontSize:17,color:'gray'}}>{gender}, {color} Colour</Typography>
            <Typography style={{fontSize:17,color:'gray'}}>₹{price}.00</Typography>
        </Box>
    )
}