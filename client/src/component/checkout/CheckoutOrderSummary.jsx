import { Box } from "@mui/material"
import { OrderSummaryDataSection } from "../cart/OrderSummaryDataSection"
import { PlaceOrderBtn } from "./PlaceOrderBtn"

export const CheckoutOrderSummary=({onClick})=>
{
    return (
        <Box>
            <OrderSummaryDataSection/>
            <PlaceOrderBtn onClick={onClick}/>
        </Box>
    )
}