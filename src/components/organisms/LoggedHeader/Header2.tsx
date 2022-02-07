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
import Typographyp from "../../atoms/Typography/Typography";
import Explore from "../Explore/Explore";
import {useNavigate} from 'react-router-dom';

import {useAuth0} from '@auth0/auth0-react';

const Header2 = () => {

  const {loginWithRedirect , logout , user , isAuthenticated} = useAuth0();

  const Login = ()=>{
    loginWithRedirect();
    console.log(user);
  }

  const Logout = ()=>{
    logout();
  } 

  const navigate = useNavigate();
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
        <Explore/>
          
        </Grid>
        <Grid item xs={4} onClick={()=>{navigate('/')}}>
        <div className={Styles.lib}><Typographyp variant={"body1"} content={"My Library"} styles={{marginTop:"7px",cursor: "pointer"}} /></div>
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
