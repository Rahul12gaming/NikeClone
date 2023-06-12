import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { LeftSideFilter } from "../component/product/LeftSideFilter";
import { SortFilter } from "./SortFilter";
import { ProductDisplayBox } from "../component/product/ProductDisplay"
import { getItemSession, setItemSession } from "../utils/sessionStorage";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../redux/features/product/action";
import { useNavigate } from "react-router-dom";
import { Loading } from "../component/loading/loading";
import { Error } from "../component/loading/error";

const BoxComponent=styled(Box)(({theme})=>({
  display: "flex",
   
   marginBottom:50,
   marginTop:'auto',
   [theme.breakpoints.down('md')]:{
        justifyContent:'center',
        alignItems:'center'
   }
}))
const FilterContainer=styled(Box)(({theme})=>({
width:300,
overflow:'hidden',
[theme.breakpoints.down('md')]:{
  width:'100%'
}
}))
export const Product = () => {
  const [isFilter, setIsFilter] = useState(true);
  const path =getItemSession("path");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSingleProduct=(data)=>{
    setItemSession("product",data)
    navigate("/desc")
  }
  const {products,isLoading,isError}=useSelector(state=>state.prodReducer)
  useEffect(()=>{
    dispatch(getRequest(path))
  },[])    
  return (
    <>
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 10,
        width: "100%",
        justifyContent: "space-around",
        textAlign:'center',
        position:'sticky',
        top:0,
        zIndex:1,
        background:'white',
        paddingTop:20,
        textAlign:'center',
        marginLeft:'auto',
      }}
    >
      <Typography style={{ fontSize: 25, fontWeight: 500, marginLeft: 50 }}>
        {path === "men" ? "Men's Product" : path==="women"?"Women's Product":path==="kids"?"Kid's Product":"All Product's"}{""}
        [{products.length}]
      </Typography>

      <BoxComponent>
        <Button
          onClick={() => {
            setIsFilter(!isFilter);
          }}
          style={{
            background: "#EDF2F7",
            color: "#1A202C",
            fontFamily: "Source Sans Pro",
            fontSize: 16,
            fontWeight: 600,
            border:'2px solid gray',
            borderRadius:5
            ,marginRight:10
          }}
        >
          {isFilter ? "Hide Filter" : "Show Filter"}{" "}
          <IoOptionsOutline style={{ paddingLeft: 5, fontWeight: 900 }} />
        </Button>
        <Button
          style={{
            background: "#EDF2F7",
            color: "#1A202C",
            fontFamily: "Source Sans Pro",
            fontSize: 16,
            fontWeight: 600,
            textAlign:'center',
            border:'2px solid gray',
            borderRadius:5
            ,marginRight:10
          }}
        >
          Reset Filter
        </Button>
        <SortFilter />
      </BoxComponent>
    </Box>
        <Grid container spacing={2} xl={12} md={12} sm={12} xs={12} >
       
       {
         isFilter && (
             <Grid item lg={3} md={3} sm={12} xs={12} elevation={3}>
              <FilterContainer >
              <LeftSideFilter />
              </FilterContainer>
            </Grid>
         )
       }
   
      {
        isLoading ?(
          <Loading />
        ):isError?(
          <Error />
        ):(
          <Grid container item lg={9} md={9} sm={12} xs={12} spacing={2} >
       {
         products.map((product,index)=>(
           <Grid item lg={4} md={4} sm={6} xs={11}> 
           <ProductDisplayBox {...product}
           onClick={()=>{
             handleSingleProduct(product)
           }}
           key={index}/>
       </Grid>
         ))
       } 
    </Grid>
        )
      }
</Grid>
    </>
  );
};
