import Header2 from "../../components/organisms/LoggedHeader/Header2";
import Footer from "../../components/molecules/footer/Footer";
import Typographys from "../../components/atoms/Typography/Typography";
import { createMuiTheme, Grid, Tab, Tabs, ThemeProvider } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import TimeIcon from "@mui/icons-material/AccessTime";
import CustomButton from "../../components/atoms/Button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";

const customTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#42c2f5",
        main: "#22C870",
        dark: "#778899",
        contrastText: "#fff"
      }
    }
  });

const useStyles = makeStyles({
  div1: {
    lineHeight: 7,
  },
  frame: {
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "60px",
  },
  right: {
    width: "500px",
    height: "200px",

    display: "flex",
  },
  line: {
    position: "absolute",
    width: "912px",
    height: "0px",
    left: "170px",
    top: "704px",
    border: "1px solid #E1ECFC",
    marginBottom: "0px",
    marginTop:"200px"
  },
});

const BookDetailView = () => {
  const Styles = useStyles();
  const value="synopsis";

  return (
    <ThemeProvider theme={customTheme}>
      <Header2 />
      <Grid container spacing={3}>
        <Grid item xs={7} marginLeft={22} marginBottom={5}>
          <Typographys variant={"body2"} content={"Get the key ideas from"} />
        </Grid>
        <Grid item xs={6} marginLeft={22}>
          <div>
            <Typographys
              variant={"h1"}
              content={"Beyond Entrepreneurship 2.0"}
            />{" "}
            <br />
            <Typographys
              variant={"subtitle5"}
              content={"Turning Your Business into an Enduring Great Company"}
            />{" "}
            <br />
            <Typographys
              variant={"body1"}
              content={"By Jim Collins and Bill Lazier"}
            />
          </div>
          <div className={Styles.frame}>
            <TimeIcon fontSize="small" />
            <Typographys
              variant="caption3"
              content="15-minutes read"
              styles={{ marginLeft: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <CustomButton
              variant="outlined"
              sx={{
                width: "122px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#22C870",
                },
              }}
            >
              Read Now
            </CustomButton>
            <CustomButton
              variant="contained"
              onClick={() => console.log("Hello")}
              sx={{
                color: "black",
                backgroundColor: "#2CE080",
                boxShadow: "none",
                width: "170px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#00C263",
                  boxShadow: "none",
                },
              }}
            >
              Finished
            </CustomButton>
            <CustomButton
              variant="text"
              endIcon={<AiOutlineArrowRight />}
              sx={{
                color: "black",
                border: "none",
                width: "170px",
                height: "44px",
                margin: "5px",
                borderRadius: "5px",
                fontSize: "14px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#22C870",
                },
              }}
            >
              send to kindle
            </CustomButton>
          </div>
        </Grid>
        <Grid item xs={3}>
          <img src="pictures/pic1.png" alt="ent-pic" />
        </Grid>

        <Grid item xs={6} marginLeft={22}>
          <div>
            <Tabs
              value={value}
              onChange={() => {}}
              aria-label="wrapped label tabs example"
              textColor="primary"
              indicatorColor="primary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#22C870"
                 }
                }}
            >
              <Tab
                value="synopsis"
                label="Synopsis"
                sx={{ fontSize: "18px", textTransform: "none" }}
              />
              <Tab
                value="who"
                label="Who is it for?"
                sx={{ fontSize: "18px", textTransform: "none" }}
              />
              <Tab
                value="about"
                label="About the author"
                sx={{ fontSize: "18px", textTransform: "none" }}
              />
            </Tabs>
          </div>
          <div>
            <Typographys
              variant="caption3"
              styles={{ marginTop: "15px", textAlign: "justify",lineHeight:3 }}
              content="Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
            />
          </div>
          <div className={Styles.right}></div>

          
        </Grid> 
        
        <Grid xs={12}>
         <div className={Styles.line}></div>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default BookDetailView;
