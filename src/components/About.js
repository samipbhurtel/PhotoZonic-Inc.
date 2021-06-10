import React from "react";
import Common from "./Common";
import Homeimg from "../images/rocket.png";

const About = () => {
  return (
    <>
      <Common
        name="About Us"
        imgSrc={Homeimg}
        visit="/contact"
        btnText="Contact Us"
      />
    </>
  );
};

export default About;
