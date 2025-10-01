import React from "react";
import eventsData from "../data/events.json";
import "./Register.css";

export default function Register({ trigger, setTrigger }) {
  if (!trigger) return null;

  return (
    <div className="modal-overlay" onClick={() => setTrigger(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setTrigger(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <h2 className="modal-title">
          Events
        </h2>

        <div className="revent-grid">
          {eventsData.events.map((event, index) => (
            <div key={index} className="revent-card">
              {event.image && (
                <div className="event-media" style={{ borderColor: event.color || "#3b82f6" }}>
                  <img src={event.image} alt={event.eventName} loading="lazy" />
                  <div className="image-overlay" style={{ background: `linear-gradient(to top, ${event.color || "#3b82f6"}15, transparent)` }}></div>
                </div>
              )}
              <div className="revent-body">
                <h3 className="revent-name">{event.eventName}</h3>

                <div className="revent-info">
                  {event.mode && (
                    <div className="info-item">
                      <span className="info-label">Mode</span>
                      <span className="info-value">{event.mode}</span>
                    </div>
                  )}
                  {event.eligibility && (
                    <div className="info-item">
                      <span className="info-label">Eligibility</span>
                      <span className="info-value">{event.eligibility}</span>
                    </div>
                  )}
                </div>

                <button
                  className="rregister-btn"
                  onClick={() => {
                    window.open(event.link, "_blank");
                    setTrigger(false);
                  }}
                  style={{ 
                    '--accent-color': event.color || '#3b82f6'
                  }}
                >
                  <span>Register Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}