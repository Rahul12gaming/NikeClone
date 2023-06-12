import {ADD_TO_CART_SUCCESS, REMOVE_FROM_CART,UPDATE_CART_DETAILS} from './actionTypes'
import {getItem} from '../../../utils/localstorage'
const init={
    cartProducts:getItem('cartProducts')||[],
    orderSummary:getItem('orderSummary')||{
        subTotal:0,
        quantity: 0,
        shipping: 0,
        discount: 0,
        total: 0
    }
}
export const cartReducer=(state=init,{type,payload})=>
{
    switch (type){
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartProducts:[...payload.cartData],
                orderSummary:{...state.orderSummary,...payload.orderSummary}
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartProducts:state.cartProducts.filter((e,i)=>i!=payload.id),
                orderSummary:{...state.orderSummary,...payload.orderSummary}
            }
        case UPDATE_CART_DETAILS:
            return {
                ...state,
                cartProducts:getItem('cartProducts')||[],
                orderSummary:getItem('orderSummary')||{
                    subTotal:0,
                    quantity: 0,
                    shipping: 0,
                    discount: 0,
                    total: 0
                }
            }
        default :
            return state
    }
}