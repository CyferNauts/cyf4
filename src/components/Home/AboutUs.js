import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import "./AboutUs.css";
import VanillaTilt from "vanilla-tilt";
import Team from "../Team/Team";

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
    <div>
      <div className="sub-navbarcontainer">
        <div className="sub-navbar">
          <p>Who We Are</p>
          <p className="midsubnavel">Driven Together</p>
          <img className="sub-navbar-img" src="https://i.pinimg.com/1200x/06/84/3b/06843b40e036f6913b036383efe0c10e.jpg"></img>
        </div>
      </div>

      <div className="about-us">
      {/* Background Video Overlay */}
      <div className="spline-overlayaboutus aboutus_wala_hai_ye">
        <video autoPlay loop muted className="aboutus-vid">
          <source src={dayum} type="video/mp4" />
        </video>
      </div>

      {/* Content Section */}
      <div className="about-us-content">
        <div className="toppartlilbro">
          <img className="tagline" src={tagline} alt="About Us" />

          <div className="des">
            <img className="icon" src={iconimg} alt="About Us" />
            <p className="about-us-text">
              We are a team of passionate individuals who are dedicated to making a positive impact on the world. 
              Our mission is to create innovative solutions that address the challenges faced by society, and to use 
              technology to improve people's lives.
            </p>
          </div>
        </div>

      <div className="featureswow">
      <div className="featuresaboutus">
        <h2>Discover Our Events</h2>
        <p>Join us in exciting events that bring our community together. From workshops to hackathons, there's something for everyone.</p>
        <button className="view-docs-btn">View Events</button>
      </div>
      <div className="featuresaboutus">
        <h2>Watch Our Teaser</h2>
        <p>Get a glimpse of our vision and mission through our engaging teaser video.</p>
        <button className="view-docs-btn">Watch Now</button>
      </div>
      <div className="featuresaboutus">
        <h2>Meet Our Team</h2>
        <p>Our diverse team of experts is dedicated to innovation and excellence.</p>
        <button className="view-docs-btn">Our Team</button>
      </div>
      </div>

      </div>
    </div>
    </div>
  );
};

export default AboutUs;
