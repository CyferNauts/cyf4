import React, { useEffect, useRef } from "react";

import Spline from "@splinetool/react-spline";
import "./AboutUs.css";
import VanillaTilt from "vanilla-tilt";



import dayum from "./PinDown.io_@eplerkirill_1756479385.mp4";
import tagline from "./Tagline.svg";
import iconimg from "./icon1.png"; // Assuming a CSS file will be created for styling


const AboutUs = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 4,
        speed: 200,
        glare: true,
        "max-glare": 0.1,
      });
    }
  }, []);

  return (
    <div className="about-us">
       <div className="spline-overlayaboutus aboutus_wala_hai_ye">
      <video 
        autoPlay 
        loop 
        muted 
        className="aboutus-vid"
      >
        <source src={dayum} type="video/mp4" />
      </video>
      </div>
      <div className="about-us-content">
      <div className="toppartlilbro">
        <img className="tagline" src={tagline} alt="About Us" />

        <div className="des">
          <img className="icon" src={iconimg} alt="About Us" />
          <p className="about-us-text">We are a team of passionate individuals who are dedicated to making a positive impact on the world. Our mission is to create innovative solutions that address the challenges faced by society, and to use technology to improve people's lives.</p>
        </div>
        </div>
        <div className="dddd" ref={tiltRef}>
         <img className="fsdfdsvcddfss" src="https://i.pinimg.com/736x/58/5e/cf/585ecf37bc1d0fd29ca96559574e7390.jpg" alt="Example" />
</div>
      </div>
    </div>
  );
};

export default AboutUs;
