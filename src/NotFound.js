import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Blackout. This page has been lost in the void.
      </p>
      <a href="/" className="notfound-btn">Back to Home</a>
    </div>
  );
}
