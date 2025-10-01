import React, { useEffect, useState, useRef } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import SpacerSection from './components/Home/SpacerSection';
import AboutUs from './components/Home/AboutUs';
import MoreAboutUs from './components/Home/MoreAboutUs';
import MoreAboutUsTeaser from './components/MoreAboutUsTeaser';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import EventLineUp from './components/EventLineUp';
import Team from './components/Team/Team';
import Events from './components/Events/Events';
import Timeline from './components/Timeline/Timeline';
import Links from './components/Links';
import Register from './components/Register';
import './App.css';
import { TweenMax } from "gsap"; // gsap 2.x compatible import

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [showRegister, setShowRegister] = useState(false);

  const tabRef = useRef(null);

  useEffect(() => {
    if (tabRef.current && isLoaded) {
      TweenMax.fromTo(tabRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
    }
  }, [activeTab, isLoaded]);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  if (!isLoaded) {
    return <Preloader onLoaded={handleLoaded} />;
  }

  return (
    <div className="App dark">
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

      {/* Your app sections */}
      <CustomCursor />
      <Navbar setActiveTab={setActiveTab} setSelectedEventIndex={setSelectedEventIndex} setShowRegister={setShowRegister} />
      <Register trigger={showRegister} setTrigger={setShowRegister} />
      {activeTab !== 'team' && activeTab !== 'events' && activeTab !== 'timeline' && (
        <>
          <Home setActiveTab={setActiveTab} setShowRegister={setShowRegister}/>
          <Links />
          <EventLineUp   onInfoClick={(index) => {
    setSelectedEventIndex(index);  // pass to Events.js
    setActiveTab("events");        // open Events page
  }}/>
          <AboutUs setActiveTab={setActiveTab}/>
          <MoreAboutUs setActiveTab={setActiveTab} setShowRegister={setShowRegister}/>
          <MoreAboutUsTeaser />
        </>
      )}
      {activeTab === 'team' && <Team />}
      {activeTab === "events" && <Events initialIndex={selectedEventIndex} />}
      {activeTab === 'timeline' && <Timeline />}
      {activeTab !== 'events' && <Footer setActiveTab={setActiveTab} onInfoClick={(index) => {
    setSelectedEventIndex(index);  // pass to Events.js
    setActiveTab("events");        // open Events page
  }}/>}
    </div>
  );
}

export default App;
