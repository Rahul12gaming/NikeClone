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
const Login=()=>
{
    return(
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop:'200px'
          }}>
            <Box style={{textAlign:'center',marginBottom:'10px'}}>
            <img src={logo} style={{ width: 50, height: 30 }} />
                <Typography variant="h5" style={{fontFamily: 'Helvetica Neue ',fontWeight:600}}>Login With Nike</Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
                <Input type={"text"} placeholder="UserName"/>
                <Input type={"password"} placeholder="Password"/>
            </Box>
            <Button style={{ width: 250, background: "black", color: "#FFF" }}>Login</Button>
            <Typography style={{color:'#4D4D4D',padding:'20px'}}>Didn't Have Account? <Link to={"/singin"} style={{color:'#4D4D4D'}}>Signin</Link></Typography>
        </Box>
    )
}
export default Login;