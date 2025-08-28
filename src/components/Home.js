import React from "react";
import Spline from "@splinetool/react-spline";
import "./Home.css";

import bgVideo from "./0829.mp4"; 

const Home = () => {
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
            <img className="schoollogo" src="https://media.discordapp.net/attachments/1403761173752451203/1409843541143715941/image.png?ex=68aeda9d&is=68ad891d&hm=235d8dd2132a2935eeffe3ca4e83b7ab22431d36d7096f72fb937eef37d58eb2&=&format=webp&quality=lossless&width=1860&height=365" alt="logo" />
            <p className="fwdf">2025</p>
          </div>
            <h1 className="hero-title gradient-text">CYFERNODE</h1>
            <div className="hero-subtitle">
            <h2 className="four">4.0</h2>
            <div className="theme">
           
             
                <h3 className="theme-title">CRAFTING TOMORROW</h3>
                <p className="theme-description">
                 Explore the intersection of technology and creativity.
                </p>
            </div>
            
            </div>

   
            <div className="hero-description">
              Blends offline and online formats, giving more students a chance
              to join in. Whether you're into tech, creativity, or
              communication, Cyfernode is your stage to show up and stand out.
            </div>
            


 <div className="hero-btns fddds">


<div className="fdscdfsg">
              <button class="button type1 sfsf">
  <span class="btn-txt">Get Brochure</span>
</button>
             <button class="button type1 sfdf">
  <span class="btn-txt">Event Timeline</span>
</button>
</div>


  <button className="button type1 registerbtnmobile">
    <span className="btn-txt">Register</span>
  </button>


</div>



      
          </div>

        
        </div>
              {/* Foreground Spline overlay */}
      <div className="spline-overlay">
        <Spline scene="https://prod.spline.design/JSjRqCtovBqau7Fq/scene.splinecode" />
      </div>



      </section>
      





    </div>

    
    
  );
  
};

export default Home;
