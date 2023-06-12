import axios from 'axios'
import {GET_DATA_LOADING,GET_DATA_ERROR,GET_DATA_SUCCESS} from './actionTypes.js'
export const ShowLoading=()=> ({type:GET_DATA_LOADING})
export const ShowError=()=> ({type:GET_DATA_ERROR})
export const showData=(payload)=>({type:GET_DATA_SUCCESS,payload})
export const getData=()=>async(dispatch)=>
{
    try
    {
        dispatch(ShowLoading())
        const res=await axios.get('http://localhost:8000/cloth')
        dispatch(showData(res.data))
    }
    catch(err)
    {
        dispatch(ShowError())
    }
}