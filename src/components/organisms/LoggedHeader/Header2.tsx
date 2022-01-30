import React from "react";

//importing material UI Components

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Styles from "./Header.module.css";
import { Grid } from "@mui/material";
import CustomAvatar from "../../atoms/Avator/Avator";
import Typographys from "../../atoms/Typography/Typography";

const Header2 = () => {
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
         <div>
          <span id={Styles.inblock}><Typography variant="body1"> Explore </Typography></span>
          <KeyboardArrowDownIcon className={Styles.icon} />
          </div>
          
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1"> My Library </Typography>
        </Grid>
        <Grid item xs={1}>
          <div>
          <Typography variant="body1" id={Styles.inblock}><CustomAvatar/></Typography>
          <KeyboardArrowDownIcon />
          </div>
          
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Header2;
