import {useDispatch} from 'react-redux'
import {Box, Typography} from '@mui/material'
import { BagItemBtn, QuantityBtn } from './BagItemBtn'
import { cartRequest, removeFromCartRequest } from '../../redux/features/cart/cartAction'
export const ItemBox=({ title, description, img, price, quantity, index, data })=>
{
    const dispatch=useDispatch()
    const handleQuantity=({target:{name}})=>
    {
        if(quantity===1&&name==='reduce')
        {
            return dispatch(removeFromCartRequest(index))
        }
       
            return dispatch(cartRequest(data,name))
        
    }
    return (
        <Box style={{display:'flex',minHeight:150,gap:20}}>
            <Box  style={{width:150,height:150}}>
                <img src={img[0]} style={{height:'100%'}}/>
            </Box>
            <Box style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                <Box style={{minHeight:150}}>
                    <Typography style={{fontWeight:500,fontFamily:'Source Sans Pro'}}>{title}</Typography>
                    <Typography style={{color:'gray',fontFamily:'Source Sans Pro'}}>{description}</Typography>

                    <Box style={{display:'flex',alignItems:'center',gap:10,marginTop:8,marginBottom:8}}>
                        <Typography style={{fontFamily:'Source Sans Pro'}}>Quantity: </Typography>
                        <QuantityBtn
                                text={'-'}
                                name={'reduce'}
                                onClick={handleQuantity}
                            />
                            <Typography style={{fontFamily:'Source Sans Pro',fontWeight:600}}>{quantity}</Typography>
                            <QuantityBtn
                                text={'+'}
                                name={'add'}
                                onClick={handleQuantity}
                            />
                    </Box>
                    <Box style={{display:'flex'}}>
                        <BagItemBtn title={'remove'}/>
                        <BagItemBtn title={'favourate'}/>
                    </Box>
                </Box>
                <Box style={{minHeight:150}}>
                    <Typography style={{fontWeight:18,fontFamily:'Source Sans Pro'}}> 
                    ₹{price}
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}