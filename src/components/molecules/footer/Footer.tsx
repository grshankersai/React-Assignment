import React from "react";
import Styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.maindiv}>
      <div id={Styles.boxes}>
        <div id={Styles.leftbox}>
          <img id={Styles.image} src="logo.png" alt="logo" />
          <p id={Styles.para1}>Big ideas in small packages </p>
          <p id={Styles.para1}>Start learning now</p>
        </div>

        <div id={Styles.middlebox}>
          <p id={Styles.footerheading1}> Editorial</p>
          <p id={Styles.footersubheadings}>Book lists</p>
          <p id={Styles.footersubheadings}>What is Nonfiction?</p>
          <p id={Styles.footersubheadings}>What to read next?</p>
          <p id={Styles.footersubheadings}>Benefits of reading</p>
        </div>

        <div id={Styles.middlebox2}>
          <p id={Styles.footerheading1}> Editorial</p>
          <p id={Styles.footersubheadings}>Book lists</p>
          <p id={Styles.footersubheadings}>What is Nonfiction?</p>
          <p id={Styles.footersubheadings}>What to read next?</p>
          <p id={Styles.footersubheadings}>Benefits of reading</p>
          <p id={Styles.footersubheadings}>Benefits of reading</p>
        </div>

        <div id={Styles.rightbox}>
          <p id={Styles.footerheading1}> Editorial</p>
          <p id={Styles.footersubheadings}>Book lists</p>
          <p id={Styles.footersubheadings}>What is Nonfiction?</p>
          <p id={Styles.footersubheadings}>What to read next?</p>
          <p id={Styles.footersubheadings}>Benefits of reading</p>
        </div>
        <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> 
        <div id={Styles.footerdiv}>
        <p id={Styles.copyright}>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</p>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
