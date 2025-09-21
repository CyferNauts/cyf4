import React, { useState } from "react"
import "./Navbar.css"
import Register from "./Register"

const navigationLinks = [
  { id: 'home', label: "Home" },
  { id: 'events', label: "Events" },
  { id: 'team', label: "Team" },
  { id: 'timeline', label: "Timeline" },
  { id: 'gallery', label: "Gallery" }
]

const events = [
  { title: "Code Unlocked" },
  { title: "Think. Build. Create." },
  { title: "The Digital Playground" },
  { title: "Stories in Motion" },
  { title: "Lens on Life" },
  { title: "Design for Impact" },
  { title: "Voices of Change" },
  { title: "Human Dimensions" },
  { title: "AidBots" },
]

export default function Navbar({ setActiveTab }) {
    const [showModal, setShowModal] = useState(false);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false)
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false)

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="logocyfernode">CYFERNODE</a>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            {navigationLinks.map((link) => (
              link.id === 'events' ? (
                <div
                  key={link.id}
                  className="dropdown"
                  onMouseEnter={() => setIsEventsDropdownOpen(true)}
                  onMouseLeave={() => setIsEventsDropdownOpen(false)}
                >
                  <a href="#" onClick={() => handleNavClick(link.id)}>{link.label}</a>
                  {isEventsDropdownOpen && (
                    <div className="dropdown-content">
                      {events.map((event, index) => (
                        <a key={index} href="#" onClick={() => { setActiveTab('events'); setIsEventsDropdownOpen(false); }}>
                          {event.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.id} href="#" onClick={() => handleNavClick(link.id)}>{link.label}</a>
              )
            ))}
          </nav>

        {/* Right buttons */}
        <div className="navbar-right">

  <button className="button type1 registerbtn">
    <span className="btn-txt">Register</span>
  </button>


        </div>

          {/* Mobile menu toggle */}
          <button
            className={`menu-btn ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <a href="#" className="logocyfernode mobile-logo">CYFERNODE</a>
            <button
              className="close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav">
            {navigationLinks.map((link) => (
              <a key={link.id} href="#" onClick={() => handleNavClick(link.id)}>
                {link.label}
              </a>
            ))}
          </nav>
          {/* Events in mobile menu */}
          <div className="mobile-events">
            <button
              className={`mobile-events-toggle ${isMobileEventsOpen ? 'open' : ''}`}
              onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
              aria-expanded={isMobileEventsOpen}
              aria-controls="mobile-events-list"
            >
              Events
              <span className="toggle-arrow">{isMobileEventsOpen ? '▲' : '▼'}</span>
            </button>
            {isMobileEventsOpen && (
              <div id="mobile-events-list" className="mobile-events-list">
                {events.map((event, index) => (
                  <a key={index} href="#" onClick={() => { setActiveTab('events'); setIsMobileMenuOpen(false); setIsMobileEventsOpen(false); }}>
                    {event.title}
                  </a>
                ))}
              </div>
            )}
          </div>


        </div>
      </div>
    </>
  )
}
