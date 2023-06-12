import { Grid } from "@mui/material"

export const GridBox=({source})=>
{ 
    return(
       <>
       
            <Grid item lg={3} md={3} sm={6} xs={12} overflow={'hidden'} borderRadius={'20px'}>
                <img src={source} style={{maxWidth:'100%',height:'auto'}} className='imgAnimation'/>
            </Grid>
           
       
       </>
    )
}