// --- START OF FILE Events.js ---

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "../../data/events.json";
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import "./Events.css";

// A new component for the creative background effect
const Background = () => (
  <div className="background-effects">
    <div className="stars"></div>
    <div className="stars2"></div>
    <div className="stars3"></div>
    <div className="vignette-overlay"></div>
  </div>
);

const Events = ({ initialIndex = 0 }) => {
  const events = eventsData.events || [];
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeEvent = events[activeIndex] || {};

  const prev = useCallback(() =>
    setActiveIndex((p) => (p === 0 ? events.length - 1 : p - 1)), [events.length]
  );
  const next = useCallback(() =>
    setActiveIndex((p) => (p === events.length - 1 ? 0 : p + 1)), [events.length]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setIsSidebarOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  const handleEventClick = (index) => {
    setActiveIndex(index);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const sidebarContent = (
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        <h2 className="fest-title">{eventsData.festName}</h2>
        <p className="fest-theme">{eventsData.theme}</p>
      </div>
      <ul>
        {events.map((event, index) => (
          <motion.li
            key={event.eventName}
            className={`event-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleEventClick(index)}
            whileHover={{ opacity: 0.95 }}
            transition={{ duration: 0.2 }}
            layout
          >
            <span className="event-card-title">{event.eventName}</span>
          </motion.li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="events-root">
      <Background />
      <div className="events-container">
        {/* Mobile Sidebar Toggle */}
        <button className={`mobile-sidebar-toggle ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.aside
                className="sidebar-mobile"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              >
                {sidebarContent}
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <aside className="sidebar-desktop">
          {sidebarContent}
        </aside>

        {/* Detail Panel */}
        <main className="detail-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="detail-content-wrapper"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <div className="detail-header">
                <h1 className="detail-title">{activeEvent.eventName}</h1>
                <div className="detail-nav-buttons">
                  <button className="nav-btn" onClick={prev} aria-label="Previous Event">
                    <FaChevronLeft />
                  </button>
                  <button className="nav-btn" onClick={next} aria-label="Next Event">
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div className="detail-body">
                {activeEvent.description && (
                  <section className="detail-section">
                    <h3>Description</h3>
                    <p>{activeEvent.description}</p>
                  </section>
                )}

                {activeEvent.prompt && (
                  <section className="detail-section">
                    <h3>Prompt</h3>
                    <p>{activeEvent.prompt}</p>
                  </section>
                )}

                {(activeEvent.mode || activeEvent.participants?.max) && (
                  <section className="detail-section">
                    <h3>Event Details</h3>
                    {activeEvent.mode && <p>Mode: {activeEvent.mode}</p>}
                    {activeEvent.eligibility && <p>Eligibility: {activeEvent.eligibility}</p>}
                    {activeEvent.participants?.max && <p>Max. Participants: {activeEvent.participants.max}       {activeEvent.participants.note && (
        <span className="participant-note"> ({activeEvent.participants.note})</span>
      )}</p>}
                  </section>
                )}

                <section className="detail-section">
                  <h3>Registration</h3>
<a
  href={activeEvent.link}
  className="register-btn" target="_blank"
>
  Register for {activeEvent.eventName}
</a>

                </section>
          {activeEvent.guidelines && (
  <section className="detail-section">
    <h3>Guidelines</h3>
    <ul>
      {activeEvent.guidelines.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
)}

{activeEvent.rounds?.length > 0 && (
  <section className="detail-section">
    <h3>Rounds</h3>
    <div className="content-grid">
      {activeEvent.rounds.map((r, i) => (
        <div key={i} className="info-card">
          <h4>{r.name}</h4>
          {Array.isArray(r.format) ? (
            <ul>
              {r.format.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{r.format}</p>
          )}
          {r.advancement && <p><strong>Advancement:</strong> {r.advancement}</p>}
        </div>
      ))}
    </div>
  </section>
)}
                
                {activeEvent.judgingCriteria && (
                  <section className="detail-section">
                    <h3>Judging Criteria</h3>
                    <div className="content-grid criteria-grid">
                      {Object.entries(activeEvent.judgingCriteria).map(([k, v]) => (
                        <div key={k} className="info-card criteria-card">
                          <span>{k.replace(/([A-Z])/g, " $1")}</span>
                          <strong>{v}%</strong>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                 {activeEvent.contacts?.length > 0 && (
                  <section className="detail-section">
                    <h3>Contacts</h3>
<ul className="contacts-list">
  {activeEvent.contacts.map((c, i) => (
    <li key={i} className="contact-item">
      <strong>{c.name}</strong>
      {c.phone && <span className="contact-phone"> — {c.phone}</span>}
      {c.handle && <span className="contact-handle"> (@{c.handle})</span>}
    </li>
  ))}
</ul>


                  </section>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Events;