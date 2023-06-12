import {Button} from '@mui/material'
export const BagItemBtn=({title,onClick})=>
{
    return (
        <Button
        variant='ghost'
        onClick={onClick}
        style={{textDecoration:'underline',fontWeight:400,color:'gray'}}>
            {title}
        </Button>
    )
}
export const QuantityBtn=({text,onClick})=>
{
    return (
        <Button 
        variant='ghost'
        onClick={onClick}
        style={{border:'1px solid #cecdce',borderRadius:'50%',fontWeight:600,fontSize:23,fontFamily:'Source Sans Pro'}}>
            {text}
        </Button>
    )
}
