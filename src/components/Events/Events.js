// --- START OF FILE Events.js ---

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventsData from "../../data/events.json";
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import "./Events.css";

const Events = () => {
  const events = eventsData.events || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // group events by category
  const groupedEvents = useMemo(() => {
    const map = {};
    events.forEach((e, i) => {
      const cat = e.eventCategory || "Other";
      if (!map[cat]) map[cat] = [];
      map[cat].push({ ...e, index: i });
    });
    return map;
  }, [events]);

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
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "Escape") {
        setIsSidebarOpen(false); // Close sidebar on Esc
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  // Close sidebar on event selection for mobile
  const handleEventClick = (index) => {
    setActiveIndex(index);
    if (window.innerWidth < 768) { // Assuming 768px is mobile breakpoint
      setIsSidebarOpen(false);
    }
  };


  return (
    <div className="events-root">
      <div className="events-container">
        {/* Mobile Sidebar Toggle */}
        <button className="mobile-sidebar-toggle" onClick={() => setIsSidebarOpen(true)}>
          <FaBars />
        </button>

        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              className="sidebar-overlay"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="sidebar-content">
                <button className="sidebar-close-btn" onClick={() => setIsSidebarOpen(false)}>
                  <FaTimes />
                </button>
                <h2 className="fest-title">{eventsData.festName}</h2>
                <p className="fest-theme">{eventsData.theme}</p>
                <nav className="sidebar-nav">
                  {Object.entries(groupedEvents).map(([cat, arr]) => (
                    <div key={cat} className="category">
                      <div className="category-label">{cat}</div>
                      <ul>
                        {arr.map((ev) => (
                          <li
                            key={ev.index}
                            className={`sidebar-item ${
                              activeIndex === ev.index ? "active" : ""
                            }`}
                            onClick={() => handleEventClick(ev.index)}
                          >
                            {ev.eventName} <span className="mode">{ev.mode}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar (always visible) */}
        <aside className="sidebar-desktop">
          <h2 className="fest-title">{eventsData.festName}</h2>
          <p className="fest-theme">{eventsData.theme}</p>
          <nav className="sidebar-nav">
            {Object.entries(groupedEvents).map(([cat, arr]) => (
              <div key={cat} className="category">
                <div className="category-label">{cat}</div>
                <ul>
                  {arr.map((ev) => (
                    <li
                      key={ev.index}
                      className={`sidebar-item ${
                        activeIndex === ev.index ? "active" : ""
                      }`}
                      onClick={() => setActiveIndex(ev.index)}
                    >
                      {ev.eventName} <span className="mode">{ev.mode}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Detail Panel */}
        <main className="detail">
          <div className="detail-header">
            <button className="nav-btn" onClick={prev}>
              <FaChevronLeft />
            </button>
            <h1 className="detail-title">{activeEvent.eventName}</h1>
            <button className="nav-btn" onClick={next}>
              <FaChevronRight />
            </button>
          </div>

          <div className="tags">
            {activeEvent.eventCategory && <span>{activeEvent.eventCategory}</span>}
            {activeEvent.mode && <span>{activeEvent.mode}</span>}
            {activeEvent.eligibility && <span>{activeEvent.eligibility}</span>}
            {activeEvent.participants?.max && (
              <span>Max {activeEvent.participants.max}</span>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="detail-body"
            >
              {activeEvent.prompt && (
                <section>
                  <h3>Prompt</h3>
                  <p>{activeEvent.prompt}</p>
                </section>
              )}

              {activeEvent.description && (
                <section>
                  <h3>Description</h3>
                  <p>{activeEvent.description}</p>
                </section>
              )}

              {activeEvent.rounds?.length > 0 && (
                <section>
                  <h3>Rounds</h3>
                  {activeEvent.rounds.map((r, i) => (
                    <div key={i} className="round">
                      <h4>{r.name}</h4>
                      <p>{r.format}</p>
                      {r.advancement && (
                        <p className="adv">Advancement: {r.advancement}</p>
                      )}
                    </div>
                  ))}
                </section>
              )}

              {activeEvent.guidelines?.length > 0 && (
                <section>
                  <h3>Guidelines</h3>
                  <ul>
                    {activeEvent.guidelines.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </section>
              )}

              {activeEvent.judgingCriteria && (
                <section>
                  <h3>Judging Criteria</h3>
                  <div className="criteria-grid">
                    {Object.entries(activeEvent.judgingCriteria).map(
                      ([k, v]) => (
                        <div key={k} className="criteria">
                          <span>{k.replace(/([A-Z])/g, " $1")}</span>
                          <strong>{v}%</strong>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

              {activeEvent.contacts?.length > 0 && (
                <section>
                  <h3>Contacts</h3>
                  <ul>
                    {activeEvent.contacts.map((c, i) => (
                      <li key={i}>
                        {c.name} {c.phone && `(${c.phone})`}{" "}
                        {c.handle && `@${c.handle}`}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Events;