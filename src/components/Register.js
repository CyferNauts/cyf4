import React from "react";
import eventsData from "../data/events.json";
import "./Register.css";

export default function Register({ trigger, setTrigger }) {
  if (!trigger) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {}
        <button
          className="close-btn"
          onClick={() => setTrigger(false)}
        >
          ✕
        </button>

        <h2 className="modal-title">
          {eventsData.festName} – {eventsData.theme}
        </h2>

        <div className="event-grid">
          {eventsData.events.map((event, index) => (
            <div key={index} className="event-card">
              <h3 className="event-name">{event.eventName}</h3>
              <button
                className="register-btn"
                onClick={() => window.open(event.form, "_blank")}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
