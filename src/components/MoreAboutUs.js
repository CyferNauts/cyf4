import React, { useEffect } from "react";
import "./MoreAboutUs.css";
import arrowimg from "./Teamletters/Arrowuni.png";
import tletter from "./Teamletters/T.png";
import eletter from "./Teamletters/E.png";
import aletter from "./Teamletters/A.png";
import mletter from "./Teamletters/M.png";

const MoreAboutUs = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % slides.length;
      const slideWidth = slides[0].offsetWidth + 20; // 20 = margin-right
      slider.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }, 3000); // every 3s (2s animation + 1s pause)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="more-about-us">
      <div className="flexingbox">
        <div className="leftpart">
          <div className="one">
            <h1>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>

          <div className="two">
            <div className="pehla">
         <div className="slider-wrapper">
  <div className="slider">
    {[
      {
        title: "Programming",
        desc: "Code your way into the future."
      },
      {
        title: "Innovation",
        desc: "Ideas that redefine tomorrow."
      },
      {
        title: "Gaming",
        desc: "Play. Compete. Conquer."
      },
      {
        title: "Movie Making",
        desc: "Turn imagination into cinema."
      },
      {
        title: "Photography",
        desc: "Capture the world differently."
      },
      {
        title: "Designing",
        desc: "Creativity with purpose."
      },
      {
        title: "Speaking",
        desc: "Words that inspire."
      },
      {
        title: "3D Modeling",
        desc: "Bring concepts into reality."
      },
      {
        title: "Robotics",
        desc: "Engineering meets intelligence."
      }
    ].map((slide, i) => (
      <div className="slide full" key={i}>
        <img
          src={`https://picsum.photos/seed/${i}/1200/600`}
          alt={`slide-${i}`}
        />
        <div className="slide-overlay">
          <h2>{slide.title}</h2>
          <p>{slide.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>

            <div className="doosra"></div>
          </div>

          <div className="three">
            <button className="button type1 dfgdfgdfgfgfg">
              <span className="btn-txt">Our Mission</span>
            </button>
            <button className="button type1 dfgdfgdfgfgfg">
              <span className="btn-txt">Timeline</span>
            </button>
          </div>

          <div className="fourth">
            <button className="button type1 dfgfddddddgfgfgg">
              <span className="btn-txt">REGISTER NOW</span>
            </button>
          </div>
        </div>

        <div className="rightpart">
          <div className="teamhead">
            <img
              src={arrowimg}
              alt=""
              className="soka arrowlilcutebro"
            ></img>
            <img src={tletter} alt="" className="soka"></img>
            <img src={eletter} alt="" className="soka"></img>
            <img src={aletter} alt="" className="soka"></img>
            <img src={mletter} alt="" className="soka"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutUs;