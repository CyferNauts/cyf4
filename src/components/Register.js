import React from "react";
import eventsData from "../data/events.json";
import "./Register.css";

export default function Register({ trigger, setTrigger }) {
  if (!trigger) return null;

  return (
    <div className="modal-overlay" onClick={() => setTrigger(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setTrigger(false)}>✕</button>

        <h2 className="modal-title">
          {eventsData.festName} – {eventsData.theme}
        </h2>

        <div className="revent-grid">
          {eventsData.events.map((event, index) => (
            <div key={index} className="revent-card">
              {event.image && (
                <div className="event-media" style={{ borderColor: event.color || "#25cdeb" }}>
                  <img src={event.image} alt={event.eventName} loading="lazy" />
                </div>
              )}
              <div className="revent-body">
                <h3 className="revent-name">{event.eventName}</h3>

                <div className="revent-info">
                  {event.mode && <p>Mode: {event.mode}</p>}
                  {event.eligibility && <p>Eligibility: {event.eligibility}</p>}
                </div>

                <button
                  className="rregister-btn"
                  onClick={
                    () => {window.open(event.link, "_blank");
  setTrigger(false);
}}
                  style={{ boxShadow: `0 6px 16px ${event.color ? `${event.color}55` : "rgba(37,205,235,0.35)"}` }}
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
