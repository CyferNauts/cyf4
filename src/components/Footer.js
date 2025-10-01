import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

const events = [
  { title: "Code Unlocked", description: "Algorithmic problem solving with human-focused challenge.", color: "#FF6B6B", image: "https://i.pinimg.com/736x/5d/c6/db/5dc6db4cc96ae17513dad05ec9ff62ee.jpg" },
  { title: "Think. Build. Create.", description: "AI innovation solving real human challenges.", color: "#4ECDC4", image: "https://i.pinimg.com/1200x/06/c1/03/06c10303dffb586d5bac86f119dc781b.jpg" },
  { title: "The Digital Playground", description: "Skill-based online gaming competition.", color: "#FFD93D", image: "https://i.pinimg.com/1200x/5c/45/a6/5c45a6b23447a2ad2755c0768fd9de46.jpg" },
  { title: "Stories in Motion", description: "Short films with tech and humanity message.", color: "#6A5ACD", image: "https://i.pinimg.com/736x/eb/36/3f/eb363f9c05cdd3653c23da0980524092.jpg" },
  { title: "Lens on Life", description: "Photo series exploring humanity and technology.", color: "#20B2AA", image: "https://i.pinimg.com/736x/82/cd/bd/82cdbd706b93b0afa7c5f7c19898a4b8.jpg" },
  { title: "Design for Impact", description: "Digital posters sparking conversation on empathy.", color: "#FF8C00", image: "https://i.pinimg.com/1200x/2a/68/1d/2a681dc4a5e84e72d27cd5cd6b974bdb.jpg" },
  { title: "Voices of Change", description: "Persuasive talks on tech and humanity.", color: "#FF1493", image: "https://i.pinimg.com/1200x/ec/86/3e/ec863e4edea157169949686e08507fc9.jpg" },
  { title: "Human Dimensions", description: "Creative 3D models shaping human life.", color: "#32CD32", image: "https://i.pinimg.com/736x/70/86/28/7086285e30da4d224fb6f1d679f7d8db.jpg" },
  { title: "AidBots", description: "Robots supporting education and inclusivity.", color: "#1E90FF", image: "https://i.pinimg.com/1200x/44/d3/14/44d314c021dd33630aba32fe93265065.jpg" },
];

const Footer = ({setActiveTab, onInfoClick}) => {
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
              <li><a onClick={() => {() => {
  setActiveTab('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}}>Home</a></li>
              <li><a onClick={() => {
  setActiveTab('events');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}>Events</a></li>
              <li><a onClick={() => {
  setActiveTab('team');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}>Team</a></li>
              <li><a onClick={() => {
  setActiveTab('timeline');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}>Timeline</a></li>
              <li><a onClick={() => {
  setActiveTab('gallery');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}>Gallery</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Events</h3>
            {/* <ul>
              <li><a onClick={() => onInfoClick(index)} >Code Unlocked</a></li>
              <li><a href="#thinkbuildcreate">Think. Build. Create.</a></li>
              <li><a href="#thedigitalplayground">The Digital Playground</a></li>
              <li><a href="#storiesinmotion">Stories in Motion</a></li>
              <li><a href="#lensonlife">Lens on Life</a></li>
              <li><a href="#designforimpact">Design for Impact</a></li>
              <li><a href="#voicesofchange">Voices of Change</a></li>
              <li><a href="#humandimensions">Human Dimensions</a></li>
              <li><a href="#aidbots">AidBots</a></li>
            </ul> */}
              <ul>
    {events.map((event, index) => (
      <li key={index}>
        <a
          onClick={() => {
            setActiveTab('events');
            onInfoClick(index);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {event.title}
        </a>
      </li>
    ))}
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
