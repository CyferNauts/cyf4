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
        <h1>About Us</h1>
        <p>
          Welcome to Cyfernode! We are dedicated to bridging the gap between technology and creativity. Our mission is to empower individuals through innovative learning experiences that blend online and offline formats.
        </p>
        <p>
          At Cyfernode, we believe in the power of collaboration and community. Whether you're a tech enthusiast, a creative thinker, or someone looking to enhance your skills, we provide a platform for you to grow and thrive.
        </p>
        <p>
          Join us on this exciting journey as we craft tomorrow's solutions today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
