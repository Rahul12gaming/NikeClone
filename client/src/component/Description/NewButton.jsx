import {Button} from '@mui/material'
export const NewButton=({color,bgColor,children,name,borderColor,click})=>
{
    return (
        <Button onClick={click} style={{color:color,background:bgColor,height:62,borderRadius:50,fontSize:17,width:'100%',marginTop:10,marginBottom:10,border:`1px solid ${borderColor}`}}>
            {name}
        </Button>
    )
}