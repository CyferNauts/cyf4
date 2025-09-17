import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${isVisible ? 'show' : ''}`}>
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-branding">
          <img
            src="https://cyfernode.netlify.app/sfs.jpg"
            alt="Summer Fields School Logo"
            className="footer-logo"
          />
          <h2 className="footer-title">Cyfernode</h2>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Cyfernode. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#moreaboutus">More About Us</a></li>
              <li><a href="#eventlineup">Event Line Up</a></li>
              <li><a href="#registration">Registration</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Events</h3>
            <ul>
              <li><a href="#codeunlocked">Code Unlocked</a></li>
              <li><a href="#thinkbuildcreate">Think. Build. Create.</a></li>
              <li><a href="#thedigitalplayground">The Digital Playground</a></li>
              <li><a href="#storiesinmotion">Stories in Motion</a></li>
              <li><a href="#lensonlife">Lens on Life</a></li>
              <li><a href="#designforimpact">Design for Impact</a></li>
              <li><a href="#voicesofchange">Voices of Change</a></li>
              <li><a href="#humandimensions">Human Dimensions</a></li>
              <li><a href="#aidbots">AidBots</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>External Links</h3>
            <ul>
              <li>
                <a
                  href="https://sfsdlf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Summer Fields School Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
