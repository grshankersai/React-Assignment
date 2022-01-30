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
  const [tab, setTab] = useState("currentlyReading");

  const buttons = [
    <Button
      key="one"
      onClick={() => {
        setTab("currentlyReading");
        formatTab();
      }}
    >
      Currently reading
    </Button>,
    <Button
      key="two"
      onClick={() => {
        setTab("Finished");
        formatTab();
      }}
    >
      Finished
    </Button>,
  ];

  function formatTab() {
    if (tab == "currentlyReading") {
      console.log(
        mylist.filter((item) => {
          return item.readstatus === "currentlyReading";
        })
      );
    } else if (tab == "Finshed") {
      console.log(
        mylist.filter((item) => {
          return item.readstatus === "Finished";
        })
      );
    }
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
        <CustomTabs />
        </Grid>

        

        <Grid item xs={12} paddingLeft={22} className={Styles.mainheading}>
          <ButtonGroup size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
        </Grid>

        {
        mylist
          .filter((item) => {
            return item.readstatus === "Finshed" || item.readstatus === "currentlyReading" ;
          })
          .map((item) => {
            return (
              <Grid item spacing={0} xs={4} paddingLeft={22}>
                <Card
                  picturenumber={item.picturenumber}
                  Heading={item.Heading}
                  subheading={item.subheading}
                  minuteread={item.minuteread}
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
