
import axios from 'axios'

import {
    GET_TOKEN,
    REMOVE_TOKEN,
    SHOW_LOGIN_PAGE,
    SHOW_RESET_PAGE,
    
  } from "./actionType";
 
import { removeItem, setItem } from '../../../utils/cookiesStorage.js';
import { setToast } from '../../../utils/extraFunctions.js';
  
  export const showLoginPage = () => ({ type: SHOW_LOGIN_PAGE });
  
  export const showResetPage = () => ({ type: SHOW_RESET_PAGE });
  
  export const getToken = (payload) => ({ type: GET_TOKEN, payload });
  
  export const removeToken = () => ({ type: REMOVE_TOKEN });
  
  export const getSignupSuccess = (data, toast, navigate) => async (dispatch) => {
    try {
      let res = await axios.post(`https://nikebackend-9173.onrender.com/singup`, data);
      res=res.data
      dispatch(getToken(res));
      setItem("token", res.token);
      setItem("user", res.user);
      setToast(toast, "Signup successfully", "success");
      //navigate(-1)
    } catch (err) {
      console.log(err);
      setToast(
        toast,
        err.response.data.message
          ? err.response.data.message
          : "Invalid Credintial !",
        "error"
      );
    }
  };
  
  export const getLoginSuccess = (data, toast, navigate) => async (dispatch) => {
    try {
      let res = await axios.post(`https://nikebackend-9173.onrender.com/users/login`, data);
      res = res.data;
      console.log(res);
      dispatch(getToken(res));
      setItem("token", res.token);
      setItem("user", res.user);
      setToast(toast, "Login Successfully", "success");
      navigate(-1);
    } catch (err) {
      console.log(err);
      setToast(
        toast,
        err.response.data.message
          ? err.response.data.message
          : "Invalid Credintial !",
        "error"
      );
    }
  };
  
  export const logoutFromAccount = (toast) => (dispatch) => {
    try {
      removeItem("token");
      removeItem("user");
      dispatch(removeToken());
      setToast(toast, "Logout Successfully", "success");
    } catch (err) {
      console.log(err);
      setToast(toast, "Something went wrong", "error");
    }
}
// export const singup=(value)=>async(dispatch)=>{
//     try{
//         const {data}=await axios.post(`http://localhost:8000/singup`,value);
//         dispatch({type:actionType.LOGIN_SUCCESS,payload:data})
//     }
//     catch(err)
//     {
//         dispatch({type:actionType.LOGIN_FAIL,payload:err.message})
//     }
// }
