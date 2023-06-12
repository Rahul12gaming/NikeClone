import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CheckoutBtn } from "./CheckoutBtn";
import { OrderSummaryDataSection } from "./OrderSummaryDataSection";
import {useNavigate} from 'react-router-dom'
export const OrderSummary = () => {
  const navigate=useNavigate()
  const orderSummary=useSelector(state=>state.cartReducer.orderSummary)
  const handleCheckout=()=>
  {
      navigate('/checkout')
  }
  return (
    <Box >
      <OrderSummaryDataSection {...orderSummary} />
      <CheckoutBtn
      onClick={handleCheckout}
        name={"Member Checkout"}
        bgColor={"black"}
        color={"white"}
        hoverBg={"#1e1e1e"}
        borderColor={"transparent"}
      />
    </Box>
  );
};
