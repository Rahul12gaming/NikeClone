import { Box, Divider, Typography } from "@mui/material";

export const OrderSummaryDataSection = ({subTotal,discount,shipping,quantity,total}) => {
  return (
    <>
      <Typography
        style={{ fontFamily: "Source Sans Pro", fontSize: 20, fontWeight: 600 }}
      >
        Summary
      </Typography>
      <Box style={{ marginTop: 20, marginBottom: 20 }}>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ fontSize: 18, fontFamily: "Source Sans Pro" }}>
            SubTotal
          </Typography>
          <Typography>₹{subTotal}.00</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Typography style={{ fontSize: 18, fontFamily: "Source Sans Pro" }}>
            Quantity
          </Typography>
          <Typography>{quantity}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Typography style={{ fontSize: 18, fontFamily: "Source Sans Pro" }}>
            Estimated Delivery
          </Typography>
          <Typography>₹{shipping}.00</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Typography style={{ fontSize: 18, fontFamily: "Source Sans Pro" }}>
            Discount
          </Typography>
          <Typography>₹{discount}.00</Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Typography style={{ fontSize: 18, fontFamily: "Source Sans Pro" }}>
          Total
        </Typography>
        <Typography style={{ fontSize: 18, fontFamily: "Source Sans Pro" }}>
        ₹{total}.00
        </Typography>
      </Box>
      <Divider style={{ marginBottom: 20 }} />
    </>
  );
};
