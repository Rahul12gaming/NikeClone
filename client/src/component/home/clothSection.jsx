import { Box, Grid } from "@mui/material"
import { GridBox } from "./GridBox"
import { DescText, HeadingText } from "./text";

export const ClothSection=({heading,description,gender,img})=>
{
    const source='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/a57ccd32-6782-414c-bcd2-5a2ff23671c1/nike-just-do-it.png';
    return (
        <>
            <Box style={{marginTop:10,textAlign:'center'}}>
                <HeadingText>{heading}</HeadingText>
                <DescText>{description}</DescText>
                <Grid container justifyContent={'space-around'} spacing={1}>
                <GridBox source={img[0]}/>
                <GridBox source={img[1]}/>
                <GridBox source={img[2]}/>
                <GridBox source={img[3]}/>
                </Grid>
            </Box>
        </>
    )
}