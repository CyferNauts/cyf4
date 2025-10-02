import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const timelineEvents = [
    {
      id: 1,
      year: '2025',
      date: '3rd October',
      title: 'Registration Begins',
      description: 'Event details go live. Participants can start registering for all competitions and activities. Join the exciting journey of CYFERNODE 2025.',
      type: 'MILESTONE',
      icon: '01'
    },
    {
      id: 2,
      year: '2025',
      date: '24th October',
      title: 'Registration Deadline',
      description: 'Last chance to register for the event. Ensure all team entries and participant details are submitted before this date.',
      type: 'EVENT',
      icon: '02'
    },
    {
      id: 3,
      year: '2025',
      date: '30th October',
      title: 'Online Events & Submission',
      description: 'All online event participation and submissions must be completed by this date. Showcase your skills in the digital arena.',
      type: 'ACHIEVEMENT',
      icon: '03'
    },
    {
      id: 4,
      year: '2025',
      date: '3rd November',
      title: 'Offline Main Event & Valedictory',
      description: 'Grand finale conducted offline. Includes main events, prize distribution, and closing valedictory ceremony.',
      type: 'MILESTONE',
      icon: '04'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.itemId);
            setVisibleItems(prev => new Set([...prev, itemId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      overflow-x: hidden;
    }

    .timeline-page {
      min-height: 100vh;
      background: #000000;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
      position: relative;
      overflow-x: hidden;
    }

    .cursor-glow {
      position: fixed;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
      pointer-events: none;
      z-index: 1;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    }

    .timeline-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 10;
    }

    .timeline-header {
      text-align: center;
      padding: 6rem 0 8rem 0;
      opacity: 0;
      animation: fadeInUp 1s ease 0.3s forwards;
    }

    .timeline-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }

    .timeline-badge:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .timeline-title {
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: -1px;
    }

    .timeline-subtitle {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.5);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
      font-weight: 300;
    }

    .timeline {
      position: relative;
      padding: 4rem 0 6rem 0;
    }

    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(-50%);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 8rem;
      width: 50%;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .timeline-item.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .timeline-item.left {
      left: 0;
      padding-right: 6rem;
      text-align: right;
    }

    .timeline-item.right {
      left: 50%;
      padding-left: 6rem;
      text-align: left;
    }

    .timeline-content {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 3rem;
      position: relative;
      transition: all 0.4s ease;
      cursor: pointer;
    }

    .timeline-content:hover {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-5px);
    }

    .timeline-number {
      position: absolute;
      top: -1rem;
      font-size: 8rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      line-height: 1;
      pointer-events: none;
    }

    .timeline-item.left .timeline-number {
      right: 1rem;
    }

    .timeline-item.right .timeline-number {
      left: 1rem;
    }

    .timeline-type {
      display: inline-block;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.4rem 1rem;
      font-size: 0.65rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .timeline-date {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 400;
      margin-bottom: 0.5rem;
      letter-spacing: 0.5px;
    }

    .timeline-event-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #ffffff;
      line-height: 1.3;
      letter-spacing: -0.5px;
    }

    .timeline-description {
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.6;
      font-size: 0.95rem;
      font-weight: 300;
    }

    .timeline-dot {
      position: absolute;
      top: 2rem;
      width: 8px;
      height: 8px;
      background: #ffffff;
      z-index: 10;
      transition: all 0.4s ease;
    }

    .timeline-dot::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .timeline-item.visible .timeline-dot {
      background: #ffffff;
    }

    .timeline-item.visible .timeline-dot::before {
      border-color: rgba(255, 255, 255, 0.4);
    }

    .timeline-item.left .timeline-dot {
      right: -0.4rem;
    }

    .timeline-item.right .timeline-dot {
      left: -0.4rem;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .timeline-page {
          margin-top: 60px;
      }
      .timeline-container {
        padding: 0 1.5rem;
      }
      
      .timeline-header {
        padding: 4rem 0 6rem 0;
      }

      .timeline-item {
        margin-bottom: 6rem;
      }
    }

    @media (max-width: 768px) {
      .timeline-line {
        left: 2rem;
      }

      .timeline-item {
        width: 100%;
        padding-left: 5rem !important;
        padding-right: 1rem !important;
        text-align: left !important;
        margin-bottom: 5rem;
      }

      .timeline-item.left,
      .timeline-item.right {
        left: 0;
      }

      .timeline-dot {
        left: 1.6rem !important;
        right: auto !important;
      }

      .timeline-content {
        padding: 2.5rem;
      }

      .timeline-number {
        font-size: 6rem;
        left: 1rem !important;
        right: auto !important;
      }

      .timeline-header {
        padding: 3rem 0 4rem 0;
      }
    }

    @media (max-width: 480px) {
      .timeline-container {
        padding: 0 1rem;
      }

      .timeline-content {
        padding: 2rem;
      }

      .timeline-event-title {
        font-size: 1.3rem;
      }

      .timeline-number {
        font-size: 4rem;
      }

      .timeline-item {
        padding-left: 4rem !important;
      }

      .timeline-dot {
        left: 1.1rem !important;
      }
    }

    @media (max-width: 320px) {
      .timeline-content {
        padding: 1.5rem;
      }

      .timeline-number {
        font-size: 3rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="timeline-page">
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>

        <div className="timeline-container">
          <div className="timeline-header">
            <div className="timeline-badge">
              TIMELINE
            </div>
            <h1 className="timeline-title">CYFERNODE 2025</h1>
            <p className="timeline-subtitle">
              A carefully curated journey through the key milestones and events that define our path to excellence
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>
            
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${visibleItems.has(event.id) ? 'visible' : ''}`}
                data-item-id={event.id}
                style={{ 
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <div className="timeline-content">
                  <div className="timeline-number">{event.icon}</div>
                  <div className="timeline-type">{event.type}</div>
                  <div className="timeline-date">{event.date}</div>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;