import { Navigate } from "react-router-dom"
import { updateCartDetails } from "../../redux/features/cart/cartAction"
import { removeItem } from "../../utils/localstorage"

export const sendOrderRequest=({navigate,dispatch})=>
{
     removeItem('cartProducts')
     removeItem('orderSummary')
     navigate('/')
     dispatch(updateCartDetails())
    
}