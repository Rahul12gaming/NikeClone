import {Box,Typography,Button,styled} from '@mui/material'
import logo from "../../assest/nike-logo.png";
import {Link} from "react-router-dom"
const Input = styled('input')({
    width: "400px",
    height: "30px",
    // border:'1px solid #4D4D4D',
    marginBottom: 10,
    textAlign: "center",
  });
export const LoginForm=()=>
{
    return (
        <>
            <Input type={"text"} placeholder="UserName"/>
            <Input type={"password"} placeholder="Password"/>
            <Button style={{ width: 250, background: "black", color: "#FFF",marginLeft:'auto',marginRight:'auto',marginBottom:20}} >
          Join Us
        </Button>
        </>
    )
}