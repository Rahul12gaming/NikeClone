import {GET_PRODUCT_ERROR,GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS} from './actionTypes'
const init={
    isLoading: false,
  isError: false,
  products: [],
  backupData: [],
  filters: {
    Gender: { Men: false, Women: false, Kids: false },
    Category: { Cloths: false, Shoes: false },
    Size: { Small: false, Medium: false, Large: false },
    Colour: {
      Black: false,
      White: false,
      Green: false,
      Red: false,
      Mix: false,
    },
  },
}
export const prodReducer=(state=init,{type,payload})=>
{
    switch (type){
        case GET_PRODUCT_LOADING:
            return {...state,isLoading:true}
        case GET_PRODUCT_ERROR:
            return {...state,isError:true,isLoading:false}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products:payload,backupData:payload}
        default :
            return state
    }
}