import { Box } from "@mui/material"
import ClipLoader from 'react-spinners/ClipLoader'
export const Loading=()=>
{
    return (
        <Box style={{display:'flex',justifyContent:'center',marginTop:'200px',marginBottom:'140px'}}>
            <ClipLoader
            color={'black'}
            size={'40'}/>
        </Box>
    )
}