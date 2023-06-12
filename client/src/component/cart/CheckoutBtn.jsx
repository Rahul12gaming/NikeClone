import { Button } from "@mui/material";

export const CheckoutBtn = ({ bgColor, color, onClick, name }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        background: bgColor,
        color: color,
        borderRadius: 50,
        width: "100%",
        height: 60,
        fontSize: "17px",
        fontWeight: 800,
        fontFamily: "Source Sans Pro",
        marginBottom: 20,
      }}
    >
      {name}
    </Button>
  );
};
