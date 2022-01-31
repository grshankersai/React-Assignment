import { Button, makeStyles } from "@material-ui/core";
import { ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "../components/molecules/Card/Card";
import Footer from "../components/molecules/footer/Footer";
import Header from "../components/organisms/Header";
import mylist from "./input.json";
import Styles from "./MyLibrary.module.css";
import CustomTabs from "../components/organisms/Tabs/Tabs";
import Header2 from "../components/organisms/LoggedHeader/Header2";
import Typographys from "../components/atoms/Typography/Typography";

const MyLibrary = () => {
  const [tabs, setTab] = useState("currentlyReading");

 

  function formatTab(tab:string) {
   setTab(tab);
  }

  return (
    <div>
      <Header />

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={12} paddingLeft={22} className={Styles.mainheading}>
          <Typographys variant='h1' content='My Library' /> 
        </Grid>
        <Grid item xs={12} paddingLeft={22} className={Styles.mainheading}>
        <CustomTabs displayCards={formatTab} />
        </Grid>

        

      
        {
        mylist
          .filter((item) => {
            return item.readstatus == tabs  ;
          })
          .map((item) => {
            return (
              <Grid item spacing={0} xs={4} paddingLeft={22} marginTop={10} marginBottom={10}>
                <Card
                  picturenumber={item.picturenumber}
                  Heading={item.Heading}
                  subheading={item.subheading}
                  minuteread={item.minuteread}
                  buttonText={tabs=='Finished'?"Read Again":"Finished"}
                />
              </Grid>
            );
          })}
      </Grid>

      <Footer />
    </div>
  );
};

export default MyLibrary;
