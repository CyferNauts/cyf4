import React, { useRef, useEffect } from 'react';
import './MoreAboutUsTeaser.css';

export default function MoreAboutUsTeaser() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleEnter = () => wrapper.classList.add('teaser-cursor-hide');
    const handleLeave = () => wrapper.classList.remove('teaser-cursor-hide');

    wrapper.addEventListener('mouseenter', handleEnter);
    wrapper.addEventListener('mouseleave', handleLeave);

    return () => {
      wrapper.removeEventListener('mouseenter', handleEnter);
      wrapper.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="teaser-container">
      <div className="teaser-video-wrapper" ref={wrapperRef}>
        <iframe
          src="https://www.youtube.com/embed/9aah1N1ZSS4?si=JYWPjCjDQG9iLrVS"
          title="CyferNode 4.0 | Official Teaser"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
