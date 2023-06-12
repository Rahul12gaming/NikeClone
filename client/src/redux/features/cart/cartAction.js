import { getCartTotal } from '../../../utils/getCartTotal';
import {ADD_TO_CART_SUCCESS, REMOVE_FROM_CART,UPDATE_CART_DETAILS} from './actionTypes'
import {getItem,setItem} from '../../../utils/localstorage'
import { checkCartDuplicate } from '../../../utils/handleCartDuplicate';
export const addToCartSuccess = (payload) => {
    return { type: ADD_TO_CART_SUCCESS, payload };
};
export const updateCartDetails=()=>
{
    return {type:UPDATE_CART_DETAILS}
}
export const removeFromCart=([payload])=>
{
    return {type:REMOVE_FROM_CART,payload};
};
export const cartRequest=(data,operation='add')=>(dispatch)=>
{
    let cartData=getItem('cartProducts')||[]
    cartData=checkCartDuplicate(cartData,data,operation)
    setItem('cartProducts', cartData);
    const orderSummary = getCartTotal(cartData, 0);
    setItem('orderSummary', orderSummary);
    dispatch(addToCartSuccess({ cartData, orderSummary }));
}
export const removeFromCartRequest=(index)=>(dispatch)=>
{
    const cartData=getItem('cartProducts')
    cartData.splice(index,1)
    setItem('cartProducts',cartData)
    const orderSummary=getCartTotal(cartData,0)
    setItem('orderSummary',orderSummary)
    dispatch(removeFromCart({cartData,orderSummary,index}))
}