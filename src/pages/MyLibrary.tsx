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

  const [data,setData] = useState(mylist);

  function formatTab(tab: string) {
    setTab(tab);
  }

  const modifyData= (id:number)=>{
    console.log(id);

    if(tabs == 'currentlyReading'){

      setData((prev)=>{
        let prev1 = prev;
        for(let i=0;i<prev1.length;i++){
          if(prev1[i].id == id){
            prev1[i].readstatus="Finished";
          }
        }
        return prev1;
        
      })
      
    }else if(tabs == 'Finished'){
      setData((prev)=>{
        let prev1 = prev;
        for(let i=0;i<prev1.length;i++){
          if(prev1[i].id == id){
            prev1[i].readstatus="currentlyReading";
          }
        }
        return prev1;

      })
      
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
          <Typographys
            variant="h1"
            content="My Library"
            styles={{ marginBottom: "10px" }}
          />
        </Grid>
        <Grid item xs={12} paddingLeft={22} className={Styles.mainheading}>
          <CustomTabs displayCards={formatTab} />
        </Grid>

        <Grid container>
        <Grid item xs={1.1}></Grid>
        <Grid item xs={7}>
      {data
        .filter((item) => {
          return item.readstatus == tabs;
        })
        .map((item) => {
          return (
            <div style={{margin:"20px",display:"inline-block"}}>
              <Card
                id={item.id}
                picturenumber={item.picturenumber}
                Heading={item.Heading}
                subheading={item.subheading}
                minuteread={item.minuteread}
                buttonText={
                  tabs == "Finished" ? "Read Again" : "Finished"
                }
                modifyData = {modifyData}
              />
            </div>
          );
        })}
    </Grid>

          <Grid item xs={3}></Grid>
        </Grid>

        {/* {
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
          })} */}
      </Grid>

      <Footer />
    </div>
  );
};

export default MyLibrary;
