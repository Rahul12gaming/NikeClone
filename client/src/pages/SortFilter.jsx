import { Box, Button, Menu, MenuItem } from "@mui/material"

import { useState } from "react"

export const SortFilter=()=>
{
    const [open,setOpen]=useState(false)
const handelClick=(event)=>
{
    setOpen(event.currentTarget)
   
}
const handleClose=()=>
{
    setOpen(false)
}
    return (
        <>
        <Box>
        <Button onClick={ handelClick} style={{background:'#EDF2F7',color:'#1A202C',fontFamily:'Source Sans Pro',fontSize:16,fontWeight:600,border:'2px solid gray',
            borderRadius:5
            ,marginRight:10}}>Sort Filter</Button>
            <Menu 
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}>
                    <MenuItem >Price: Low-High</MenuItem>
                    <MenuItem >Price: High-Low</MenuItem>
                    <MenuItem >Rating: Low-High</MenuItem>
                    <MenuItem >Rating: High-Low</MenuItem>
                    <MenuItem >Name: A-Z</MenuItem>
                    <MenuItem >Name: Z-A</MenuItem>
            </Menu>
        </Box>
        </>
    )
}