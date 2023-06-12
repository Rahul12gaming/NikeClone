import { ItemBox } from "./ItemBox"
import {Box, Typography} from '@mui/material'
import { useSelector } from "react-redux"
export const BagItems=()=>
{
    const cartProducts=useSelector(state=>state.cartReducer.cartProducts)
    return (
       <>
        <Box>
        <Typography style={{fontWeight:600,fontFamily:'Source Sans Pro',fontSize:20}}>Bag</Typography>
        {
            cartProducts.map((item,index)=>(
                <ItemBox key={index} data={item} index={index} {...item}/>
            ))
        }
        </Box>
       </>

        
    )
}