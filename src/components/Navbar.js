import React, { useState } from "react"
import "./Navbar.css"
import Register from "./Register"

const navigationLinks = [
  { id: 'home', label: "Home" },
  { id: 'events', label: "Events" },
  { id: 'team', label: "Team" },
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

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  }

  return (
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
<button 
  className="button type1 registerbtn" 
  onClick={() => setShowModal(true)}
>
  <span className="btn-txt">Register</span>
</button>

{showModal && <Register trigger={showModal} setTrigger={setShowModal} />}
  


        </div>

        {/* Mobile menu toggle */}
        <button
          className={`menu-btn ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navigationLinks.map((link) => (
            <a key={link.id} href="#" onClick={() => handleNavClick(link.id)}>
              {link.label}
            </a>
          ))}
          {/* Events in mobile menu */}
          <div className="mobile-events">
            <h4>Events</h4>
            {events.map((event, index) => (
              <a key={index} href="#" onClick={() => { setActiveTab('events'); setIsMobileMenuOpen(false); }}>
                {event.title}
              </a>
            ))}
          </div>
          
          <a href="#" className="btn primary">Get Started</a>
        </div>
      )}
    </header>
  )
}
