import React, { useState } from "react"
import "./Navbar.css"

const navigationLinks = [
  { id: 'home', label: "Home" },
  { id: 'events', label: "Events" },
  { id: 'team', label: "Team" },
  { id: 'gallery', label: "Gallery" }
]

export default function Navbar({ setActiveTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <a key={link.id} href="#" onClick={() => handleNavClick(link.id)}>{link.label}</a>
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
          
          <a href="#" className="btn primary">Get Started</a>
        </div>
      )}
    </header>
  )
}
