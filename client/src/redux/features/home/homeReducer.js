import {GET_DATA_LOADING,GET_DATA_ERROR,GET_DATA_SUCCESS} from './actionTypes.js'

const init={
    loading:false,
    error:false,
    cloth:[],
    shoe:[],
}
export const homeReducer=(state=init,{type,payload})=>
{
    switch (type){
        case GET_DATA_LOADING:
            return {...state,loading:true}
        case GET_DATA_SUCCESS:
            return {...state,loading:false,cloth:payload}
        case GET_DATA_ERROR:
            return {...state,loading:false,error:true}
        default:
            return state
    }
}