import { Typography } from "@mui/material"

export const HeadingText=({children})=>
{
    return (
        
        <Typography variant="h1" style={{fontWeight:600,fontFamily:"'Anton', sans-serif",textAlign:'center',letterSpacing:5}}>{children}</Typography>
    )
}
export const DescText=({children})=>
{
    return (
        <Typography style={{fontSize:16,marginBottom:30}}>{children}</Typography>
    )
}