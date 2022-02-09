import { IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { MouseEventHandler } from "react";
type CustomSearchProps = {
    onClick?:MouseEventHandler<HTMLButtonElement>,
    title?:string,
}
const CustomSearch = ({onClick,title}:CustomSearchProps) => {
    return ( 
        <div data-testid="Maindiv">
             <IconButton data-testid="icon-btn" onClick={()=>{console.log(title)}} title={title}>
                <Search data-testid="search-btn" onClick={(e)=>{console.log(e.target)}} />
            </IconButton>
        </div>
     );
};
 
export default CustomSearch;