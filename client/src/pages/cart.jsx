import { Grid, styled } from "@mui/material"
import { BagItems } from '../component/cart/BagItems';
import { OrderSummary } from '../component/cart/OrderSummary';
import {ToastContainer} from 'react-toastify'
const Container=styled(Grid)(({theme})=>({
    marginTop:100,
    paddingLeft:100,
    paddingRight:100,
    [theme.breakpoints.down('md')]:{
        paddingLeft:10,
        paddingRight:10
    }
}))
export const Cart=()=>
{
    return (
        <>
            <Container container spacing={2} justifyContent={'center'}>
                <Grid item xl={8} md={8} sm={12} xs={12}>
                
                    
                    <BagItems/>
                </Grid>
                <Grid item xl={4} md={4} sm={12} xs={12}>
                    <OrderSummary/>
                </Grid>
            </Container>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        </>
    )
}