import axios from 'axios'
import {GET_PRODUCT_ERROR,GET_PRODUCT_LOADING,GET_PRODUCT_SUCCESS} from './actionTypes'
export const getDataLoading=()=>({type:GET_PRODUCT_LOADING})
export const getDataError=()=>({type:GET_PRODUCT_ERROR})
export const getDataSuccess=(payload)=>({type:GET_PRODUCT_SUCCESS,payload})

export const getRequest=(path)=>async(dispatch)=>{
    try{
        dispatch(getDataLoading())
        const {data}=await axios.get(`http://localhost:8000/${path}`)
        dispatch(getDataSuccess(data))
    }
    catch(err){
        console.log(err);
        dispatch(getDataError())
    }
}