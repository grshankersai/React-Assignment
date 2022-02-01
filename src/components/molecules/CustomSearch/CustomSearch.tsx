import { IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { MouseEventHandler } from "react";
type CustomSearchProps = {
    onClick?:MouseEventHandler<HTMLButtonElement>,
    title?:string,
}
const CustomSearch = ({onClick,title}:CustomSearchProps) => {
    return ( 
        <div>
             <IconButton onClick={()=>{console.log(title)}} title={title}>
                <Search onClick={(e)=>{console.log(e.target)}} />
            </IconButton>
        </div>
     );
};
 
export default CustomSearch;