import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import gsap from "gsap";
import Preloader from './components/Preloader';
import NotFound from "./NotFound";
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
const Resources = lazy(() => import('./components/Resources'));
const Programming = lazy(() => import('./components/ResourcePages/Programming'));
const Hackathon = lazy(() => import('./components/ResourcePages/Hackathon'));
const MachineLearning = lazy(() => import('./components/ResourcePages/MachineLearning'));
const UiUxDesign = lazy(() => import('./components/ResourcePages/UiUxDesign'));
const Hardware = lazy(() => import('./components/ResourcePages/Hardware'));
const ThreeDModeling = lazy(() => import('./components/ResourcePages/ThreeDModeling'));
const GroupDiscussion = lazy(() => import('./components/ResourcePages/GroupDiscussion'));
const VideoEditing = lazy(() => import('./components/ResourcePages/VideoEditing'));
const GraphicDesign = lazy(() => import('./components/ResourcePages/GraphicDesign'));
const Photography = lazy(() => import('./components/ResourcePages/Photography'));
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
    return <Preloader onLoaded={handleLoaded} />;
  }

  return (
    <Suspense fallback={<Preloader simple />}>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/resources" element={
          <div className="App dark">
            <CustomCursor />
            <Resources />
          </div>
        } />
        <Route path="/resources/programming" element={
          <div className="App dark">
            <CustomCursor />
            <Programming />
          </div>
        } />
        <Route path="/resources/hackathon" element={
          <div className="App dark">
            <CustomCursor />
            <Hackathon />
          </div>
        } />
        <Route path="/resources/machine-learning" element={
          <div className="App dark">
            <CustomCursor />
            <MachineLearning />
          </div>
        } />
        <Route path="/resources/ui-ux-design" element={
          <div className="App dark">
            <CustomCursor />
            <UiUxDesign />
          </div>
        } />
        <Route path="/resources/hardware" element={
          <div className="App dark">
            <CustomCursor />
            <Hardware />
          </div>
        } />
        <Route path="/resources/3d-modeling" element={
          <div className="App dark">
            <CustomCursor />
            <ThreeDModeling />
          </div>
        } />
        <Route path="/resources/group-discussion" element={
          <div className="App dark">
            <CustomCursor />
            <GroupDiscussion />
          </div>
        } />
        <Route path="/resources/video-editing" element={
          <div className="App dark">
            <CustomCursor />
            <VideoEditing />
          </div>
        } />
        <Route path="/resources/graphic-design" element={
          <div className="App dark">
            <CustomCursor />
            <GraphicDesign />
          </div>
        } />
        <Route path="/resources/photography" element={
          <div className="App dark">
            <CustomCursor />
            <Photography />
          </div>
        } />
<Route path="*" element={
  <div className="App dark">
    <CustomCursor /> 
    <NotFound />
  </div>
} />

      </Routes>
    </Suspense>
  );
}

export default App;
