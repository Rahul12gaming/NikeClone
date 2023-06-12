import { Box, styled, Typography } from "@mui/material";

const Input = styled("input")({
  width: "-webkit-fill-available",
  paddingLeft: 20,
  color: "inherit",
  outline: 'transparent solid 2px',
  minWidth:0,
  borderWidth:2,
  height:'2.5rem',
  borderColor:'inherit'
});
export const CheckoutForm = ({onChange}) => {
  return (
    <>
      <Box style={{marginBottom:20}}>
      <Typography style={{fontSize:20,fontWeight:600,marginBottom:20,fontFamily:'Source Sans Pro'}}>Enter your name and address:</Typography>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Input onChange={onChange} type={"text"} name={"firstname"} placeholder="FirstName*" />
        <Input onChange={onChange} type={"text"} name={"lastname"} placeholder="LasttName*" />
        <Input onChange={onChange}
          type={"text"}
          name={"addressLine1"}
          placeholder="Address Line1*"
        />
        <Input onChange={onChange}
          type={"text"}
          name={"addressLine2"}
          placeholder="Address Line2*"
        />
        <Box style={{ display: "flex",justifyContent:'space-between'}}>
          <Input onChange={onChange} type={"text"} name={"locality"} placeholder="City/Locality*" />
          <Input onChange={onChange} type={"number"} name={"pincode"} placeholder="Pincode*" />
        </Box>
        <Box style={{ display: "flex" }}>
          <Input onChange={onChange} type={"text"} name={"state"} placeholder="State/Territory*" />
          <Input onChange={onChange} type={"text"} name={"country"} placeholder="Country*" />
        </Box>
       
          <Typography style={{fontSize:20,fontWeight:600,marginTop:30}}>What's your contact information?</Typography>
          <Input onChange={onChange} type={"email"} name={"email"} placeholder="Email*" />
          <Input onChange={onChange} type={"number"} name={"mobile"} placeholder="Mobile*" />
       
      </Box>
      
      </Box>
    </>
  );
};
