import React from "react";

import Spline from "@splinetool/react-spline";
import "./AboutUs.css"; // Assuming a CSS file will be created for styling

const AboutUs = () => {
  return (
    <div className="about-us">
       <div className="spline-overlayaboutus">
        <Spline scene="https://prod.spline.design/60yFZPeBQBqF9vqM/scene.splinecode" />
      </div>
      <div className="about-us-content">
        <h1>Turning ideas into creations that <span className="fdsddgdf">define the future.</span></h1>

      </div>
    </div>
  );
};

export default AboutUs;
