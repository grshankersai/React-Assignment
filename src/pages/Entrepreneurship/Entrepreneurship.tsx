import React, { MouseEventHandler } from "react";
import Header2 from "../../components/organisms/LoggedHeader/Header2";
import Footer from "../../components/molecules/footer/Footer";
import Banner from "../../components/molecules/Banner/Banner";
import { Grid, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import CustomSearch from "../../components/molecules/CustomSearch/CustomSearch";
import Styles from "./Entrepreneurship.module.css";
import Typography from "../../components/atoms/Typography/Typography";
import data from "../input.json";
import Card from "../../components/molecules/Card/Card";

const Entrepreneurship = () => {
  return (
    <div>
      <Header2 />
      <Grid container>
        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          marginLeft={30}
          marginBottom={5}
        >
          <Banner />
        </Grid>
        <Grid item xs={12} marginLeft={10}>
          <div className={Styles.input}>
            <Input
              startAdornment={<CustomSearch />}
              placeholder="Search by Title or Author"
              name="text"
              fullWidth={true}
              sx={{ position: "relative", left: "10%", width: "800px" }}
            />
          </div>
        </Grid>

        <Grid item xs={12} marginLeft={32} marginTop={10} marginBottom={10}>
          <Typography variant={"h3"} content={"Trending blinks"}></Typography>
        </Grid>

        <Grid item xs={12} marginLeft={32}>
          <Grid container>
            {data
              .filter((item) => {
                return item.rtype == "Trending";
              })
              .map((items) => {
                return (
                    <Grid item xs={4}>
                        <Card
                      picturenumber={items.picturenumber}
                      Heading={items.Heading}
                      subheading={items.subheading}
                      minuteread={items.minuteread} buttonText={"Add to Library"}                  />

                    </Grid>
                  
                );
              })}
          </Grid>
        </Grid>

        <Grid item xs={12} marginLeft={32} marginTop={10} marginBottom={10}>
          <Typography variant={"h3"} content={"Just added"}></Typography>
        </Grid>

        <Grid item xs={12} marginLeft={32}>
          <Grid container>
            {data
              .filter((item) => {
                return item.rtype == "justadded";
              })
              .map((items) => {
                return (
                    <Grid item xs={4}>
                        <Card
                      picturenumber={items.picturenumber}
                      Heading={items.Heading}
                      subheading={items.subheading}
                      minuteread={items.minuteread} buttonText={"Add to Library"}                  />

                    </Grid>
                  
                );
              })}
          </Grid>
        </Grid>

        <Grid item xs={12} marginLeft={32} marginTop={10} marginBottom={10}>
          <Typography
            variant={"h3"}
            content={"Featured audio blinks"}
          ></Typography>
        </Grid>

        <Grid item xs={12} marginLeft={32} marginBottom={20}>
          <Grid container>
            {data
              .filter((item) => {
                return item.audio;
              })
              .map((items) => {
                return (
                    <Grid item xs={4}>
                        <Card
                      picturenumber={items.picturenumber}
                      Heading={items.Heading}
                      subheading={items.subheading}
                      minuteread={items.minuteread} buttonText={"Add to Library"}                  />

                    </Grid>
                  
                );
              })}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Entrepreneurship;
