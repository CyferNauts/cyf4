import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import './App.css';
import gsap from "gsap";

const Preloader = lazy(() => import('./components/Preloader'));
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home/Home'));
const SpacerSection = lazy(() => import('./components/Home/SpacerSection'));
const AboutUs = lazy(() => import('./components/Home/AboutUs'));
const MoreAboutUs = lazy(() => import('./components/Home/MoreAboutUs'));
const MoreAboutUsTeaser = lazy(() => import('./components/MoreAboutUsTeaser'));
const Footer = lazy(() => import('./components/Footer'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const EventLineUp = lazy(() => import('./components/EventLineUp'));
const Team = lazy(() => import('./components/Team/Team'));
const Events = lazy(() => import('./components/Events/Events'));
const Timeline = lazy(() => import('./components/Timeline/Timeline'));
const Links = lazy(() => import('./components/Links'));
const Register = lazy(() => import('./components/Register'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [showRegister, setShowRegister] = useState(false);

  const tabRef = useRef(null);

  useEffect(() => {
    if (tabRef.current && isLoaded) {
      gsap.fromTo(tabRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
    }
  }, [activeTab, isLoaded]);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  if (!isLoaded) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Preloader onLoaded={handleLoaded} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            <Home setActiveTab={setActiveTab} setShowRegister={setShowRegister} />
            <Links />
            <EventLineUp onInfoClick={(index) => {
              setSelectedEventIndex(index);  // pass to Events.js
              setActiveTab("events");        // open Events page
            }} />
            <AboutUs setActiveTab={setActiveTab} />
            <MoreAboutUs setActiveTab={setActiveTab} setShowRegister={setShowRegister} />
            <MoreAboutUsTeaser />
          </>
        )}
        {activeTab === 'team' && <Team />}
        {activeTab === "events" && <Events initialIndex={selectedEventIndex} />}
        {activeTab === 'timeline' && <Timeline />}
        {activeTab !== 'events' && <Footer setActiveTab={setActiveTab} onInfoClick={(index) => {
          setSelectedEventIndex(index);  // pass to Events.js
          setActiveTab("events");        // open Events page
        }} />}
      </div>
    </Suspense>
  );
}

export default App;
