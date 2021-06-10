import React from "react";
import Common from "./Common";
import Homeimg from "../images/camera.png";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome To"
        brandName="PhotoZonic Inc."
        imgSrc={Homeimg}
        visit="/services"
        btnText="Get Started"
      />
    </>
  );
};

export default Home;
