import React from "react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./Home.css";
import bgVideo from "./0829.mp4";

const Home = ({setActiveTab, setShowRegister}) => {
  return (
    <div className="home" id="home">
      <div className="fadeoutdiv"> <div className="fadeoutdivactual"> </div></div>
      <div className="overlay">
        {/* Video Background */}

        <video
          autoPlay
          loop
          muted
          className="home-background"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      {/* UI (underneath) */}
      <section className="hero">

        <div className="hero-container">
          <div className="hero-content">
            <div className="tops">
              <img className="schoollogo" src="https://cyfernode.netlify.app/sfs.png" alt="logo" />
              <p className="fwdf">2025</p>
            </div>
            <h1 className="hero-title gradient-text">CYFERNODE</h1>

            <div className="hero-subtitle">
              <h2 className="four">4.0</h2>
              <div className="theme">


                <h3 className="theme-title">COEXISTENCE</h3>
                <p className="theme-description">
                  Explore the harmony where humans and machines unite.
                </p>
              </div>

            </div>


            <div className="hero-description">
              The Annual Inter-School Tech Symposium organized by CyferNauts, the digital society of Summer Fields School, DlF Phase-1, Gurugram.
            </div>



            <div className="hero-btns fddds">


              <div className="fdscdfsg">
                <button class="button type1 sfsf">
                  <span class="btn-txt">Get Brochure</span>
                </button>
                <button class="button type1 sfdf" onClick={() => setActiveTab('timeline')}>
                  <span class="btn-txt">Event Timeline</span>
                </button>
              </div>


              <button
                className="button type1 registerbtnmobile"
              >
                <span className="btn-txt" onClick={() => setShowRegister(true)}>Register</span>
              </button>
            </div>



        </div>


    </div>
              {/* Foreground Spline overlay */ }
  <div className="spline-overlay">
    <Spline scene="https://prod.spline.design/JSjRqCtovBqau7Fq/scene.splinecode" />
  </div>



      </section >
      





    </div >

    
    
  );
  
};

export default Home;
