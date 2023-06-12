import { Button,styled} from "@mui/material";
  import { useState } from "react";
  import { getSignupSuccess } from "../../redux/features/auth/authAction";
  import {useDispatch, useSelector} from 'react-redux'
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
export const SingupForm=()=>
{
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
      console.log(value);
    }
    return(
        <>
        <Input variant="standard" placeholder="FirstName" onChange={(e)=>handleChange(e)} name='firstname' />
          <Input variant="standard" placeholder="LastName"    onChange={(e)=>handleChange(e)} name='lastname'/>
          <Input variant="standard" placeholder="UserName"  onChange={(e)=>handleChange(e)} name='username'/>
          <Input variant="standard" placeholder="Email"     onChange={(e)=>handleChange(e)} name='email'/>
          <Input variant="standard" placeholder="Password" onChange={(e)=>handleChange(e)} name='password'/>
          <Button style={{ width: 250, background: "black", color: "#FFF",marginLeft:'auto',marginRight:'auto',marginBottom:20}} onClick={()=>handleSubmit()}>
          Join Us
        </Button>
        </>
    )
}