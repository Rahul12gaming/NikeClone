import {
 Accordion,
  AccordionDetails,
  AccordionSummary,
 Checkbox,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export const FilterSection = ({ title, item }) => {
  return (
    <>
     <Accordion style={{borderRadius:11,boxShadow:'7px 9px #e8e8e8',border:'2px solid gray',marginBottom:5}}>
        <h2>
          <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
            <Box>
              <Typography>{title}</Typography>
            </Box>
          </AccordionSummary>
        </h2>
        <AccordionDetails>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            {item.map((e, i) => (
              <Box style={{display:'flex',alignItems:'center'}}>
                <Checkbox value={e} name={title} key={i} >
                  
                  </Checkbox>
                  <Typography style={{ fontSize: 16, color: "black", fontFamily: "Source Sans Pro", }}>
                      {e}
                    </Typography>
              </Box>
            ))}
            <Button style={{
            background: "#EDF2F7",
            color: "#1A202C",
            fontFamily: "Source Sans Pro",
            fontSize: 16,
            fontWeight: 600,
          }}>Apply</Button>
          </Box>
        </AccordionDetails>
        </Accordion>
    </>
  );
};
