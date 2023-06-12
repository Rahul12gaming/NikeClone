import { Button } from "@mui/material"

export const PlaceOrderBtn=({onClick})=>
{
    return (
        <Button onClick={onClick} style={{height:60,background:'#edf2f7',width:'100%',color:'black',fontSize:17,borderRadius:50,border:'1px solid #cecdce',fontWeight:600,fontFamily:'Source Sans Pro'}}>Place Order</Button>
    )
}