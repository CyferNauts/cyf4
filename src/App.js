import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SpacerSection from './components/SpacerSection';
import AboutUs from './components/AboutUs';
import MoreAboutUs from './components/MoreAboutUs';
import Links from './components/Links';
import Events from './components/Events';

import './App.css';
import { TweenMax } from "gsap"; // gsap 2.x compatible import

function App() {
  useEffect(() => {
    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;

    const cursor = document.getElementById("cursor");
    let mousePosition = { x: 0, y: 0 };
    let dots = [];
    let timeoutID;
    let idle = false;

    class Dot {
      constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - (width / 2) * this.scale + 2;
        this.element = document.createElement("span");
        TweenMax.set(this.element, { scale: this.scale });
        cursor.appendChild(this.element);
      }
      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
      }
      draw() {
        if (!idle || this.index <= sineDots) {
          TweenMax.set(this.element, { x: this.x, y: this.y });
        } else {
          this.angleX += this.anglespeed;
          this.angleY += this.anglespeed;
          this.y = this.lockY + Math.sin(this.angleY) * this.range;
          this.x = this.lockX + Math.sin(this.angleX) * this.range;
          TweenMax.set(this.element, { x: this.x, y: this.y });
        }
      }
    }

    const startIdleTimer = () => {
      timeoutID = setTimeout(() => {
        idle = true;
        dots.forEach(dot => dot.lock());
      }, idleTimeout);
      idle = false;
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutID);
      startIdleTimer();
    };

    const buildDots = () => {
      for (let i = 0; i < amount; i++) {
        dots.push(new Dot(i));
      }
    };

    const onMouseMove = (event) => {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    };

    const onTouchMove = (event) => {
      mousePosition.x = event.touches[0].clientX - width / 2;
      mousePosition.y = event.touches[0].clientY - width / 2;
      resetIdleTimer();
    };

    const positionCursor = () => {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index, arr) => {
        const nextDot = arr[index + 1] || arr[0];
        dot.x = x;
        dot.y = y;
        dot.draw();
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    const render = () => {
      positionCursor();
      requestAnimationFrame(render);
    };

    const init = () => {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      startIdleTimer();
      buildDots();
      requestAnimationFrame(render);
    };

    init();
  }, []);

  return (
    <div className="App">
      {/* Gooey filter */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Cursor */}
      <div id="cursor"></div>

      {/* Your app sections */}
      <Navbar />
      <Home />
      {/* <Events /> */}
      <AboutUs />
      <MoreAboutUs />
      <Links/>
    </div>
  );
}

export default App;