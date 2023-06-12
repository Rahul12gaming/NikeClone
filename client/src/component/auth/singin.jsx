import {
  Box,
  Typography,
  styled,
  Button
} from "@mui/material";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import logo from "../../assest/nike-logo.png";
import { getSignupSuccess } from "../../redux/features/auth/authAction";
import {useToast} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const Input = styled("input")({
  width: "400px",
  height: "30px",
  // border:'1px solid #4D4D4D',
  marginBottom: 10,
  textAlign: "center",
});
const singupInitialize={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:''
}
const Singin = () => {
 
  const {loading}=useSelector(state=>state.authReducer)
  const [value,setdata]=useState(singupInitialize)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const toast=useToast()
  const handleSubmit=()=>
  {
     dispatch(getSignupSuccess(value,toast,navigate))
  }
  const handleChange=(e)=>
  {
      setdata({...value,[e.target.name]:e.target.value})
      console.log(value,loading);
  }
  
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop:'200px'
        }}
      >
        <Box style={{ textAlign: "center" }}>
          <img src={logo} style={{ width: 50, height: 30 }} />
          <Typography variant="h5">BECOME A NIKE MEMBER</Typography>
          <Typography
            style={{
              fontFamily: "Nunito",
              width: 200,
              color: "#4D4D4D",
              paddingTop: "10px",
              marginLeft: 50,
              lineHeight: "25px",
              marginBottom: "10px",
            }}
          >
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </Typography>
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Input variant="standard" placeholder="FirstName" onChange={(e)=>handleChange(e)} name='firstname' />
          <Input variant="standard" placeholder="LastName" onChange={(e)=>handleChange(e)} name='lastname'/>
          <Input variant="standard" placeholder="UserName" onChange={(e)=>handleChange(e)} name='username'/>
          <Input variant="standard" placeholder="Email" onChange={(e)=>handleChange(e)} name='email'/>
          <Input variant="standard" placeholder="Password" onChange={(e)=>handleChange(e)} name='password'/>
        </Box>
        <Button style={{ width: 250, background: "black", color: "#FFF" }} onClick={()=>handleSubmit()}>
          Singin
        </Button>
        <Typography style={{color:'#4D4D4D',padding:'20px'}}>Already Have Account? <Link to={"/login"} style={{color:'#4D4D4D'}}>Login</Link></Typography>
      </Box>
    </>
  );
};
export default Singin;
