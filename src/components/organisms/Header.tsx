import React from "react";

//importing material UI Components

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "../atoms/Typography/Typography";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Styles from "./Header.module.css";
import { Grid } from "@mui/material";
import Explore from "./Explore/Explore";


const Header = () => {
  return (
    <div id={Styles.maindiv}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <img src="logo.png" alt="icon" className={Styles.image} />
        </Grid>
        <Grid item xs={1}>
          <SearchIcon className={Styles.icon} />
        </Grid>
        <Grid item xs={1}>
        <Explore />
        </Grid>
        <Grid item xs={4}  >
          <div className={Styles.lib}><Typography variant={"body1"} content={"My Library"} styles={{marginTop:"7px" , cursor: "pointer"}} /></div>
            
        </Grid>
        <Grid item xs={1}>
          <div className={Styles.root}>
          <div className={Styles.text}><Typography variant={"body1"} content={"Account"} styles={{marginTop:"0px",marginBottom:'15px',cursor: "pointer"}}/></div>
          <KeyboardArrowDownIcon />
          </div>
        
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Header;
