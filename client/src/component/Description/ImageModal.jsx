
import { ModalClose} from "@mui/joy"
import { Box, Grid ,Modal} from "@mui/material"
import { useState } from "react"
import {RxCross2} from 'react-icons/rx'

export const ImageModal=({img})=>
{
    

    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <>
            <Grid item container lg={8} md={8} sm={12} xs={12} spacing={1} >
                {img.map((img,index)=>(
                    <Grid item lg={5} md={5} sm={6} >
                    <img onClick={handleOpen} src={img}  style={{maxWidth:'100%',height:'auto'}} />
                    
                    </Grid>
                ))}
                
            </Grid>
            <Modal open={open} onClose={handleClose} style={{width:'100%',height:'100%'}}>
                
                <Box>
                    <Box style={{paddingTop:10,paddingLeft:10,position:'absolute',}}>
                        <RxCross2 size={20} onClick={handleClose}/>
                    </Box>

                <Box style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    
                    
                    
                    <Grid container item lg={6} md={6}  spacing={2}  style={{}}>
                    {img.map((img,index)=>(
                    <Grid item lg={5} md={5} sm={6} >
                    <img onClick={handleOpen} src={img}  style={{maxWidth:'100%',height:'auto'}} />
                    
                    </Grid>
                ))}
                        
                    </Grid>
                   
                    
                </Box>
                </Box>
            </Modal>
        </>
    )
}