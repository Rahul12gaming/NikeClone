import { Box,Accordion} from "@mui/material";
import { FilterSection } from "./LeftSideFilterComponent";

export const LeftSideFilter=()=>
{
    // const init = {
    //     Gender: { Men: false, Women: false, Kids: false },
    //     Category: { Cloths: false, Shoes: false },
    //     Size: { Small: false, Medium: false, Large: false },
    //     Colour: {
    //       Black: false,
    //       White: false,
    //       Green: false,
    //       Red: false,
    //       Mix: false,
    //     },
    //   };
      return (
        <>
            
              <FilterSection
            item={["Men", "Women", "Kids"]}
            title={"Gender"}/>
            <FilterSection
            item={["Cloths","Shoes"]}
            title={"Category"}/>
            <FilterSection
            item={["Small","Medium","Large"]}
            title={"Size"}/>
            <FilterSection
            item={["Black", "White", "Green", "Red", "Blue"]}
            title={"Colour"}/>
            
        </>
      )
}