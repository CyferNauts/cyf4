import React, { useState, useEffect, useRef } from "react";
import "./EventLineUp.css";
// https://i.pinimg.com/1200x/db/e2/b6/dbe2b6eeb24a7718c0397f901138cf0d.jpg
const events = [
  {
    title: "Code Unlocked",
    description: "Cryptic programming challenge testing logic, coding, and problem-solving skills.",
    color: "#FF6B6B",
    image: "https://i.pinimg.com/736x/5d/c6/db/5dc6db4cc96ae17513dad05ec9ff62ee.jpg"
  },
  {
    title: "Think. Build. Create.",
    description: "Two-stage hackathon with AI pitches, live finals, and surprise adaptability tests.",
    color: "#4ECDC4",
    image: "https://i.pinimg.com/1200x/06/c1/03/06c10303dffb586d5bac86f119dc781b.jpg"
  },
  {
    title: "The Digital Playground",
    description: "Online knockout gaming tournament testing teamwork, adaptability, and skill.",
    color: "#FFD93D",
    image: "https://i.pinimg.com/1200x/5c/45/a6/5c45a6b23447a2ad2755c0768fd9de46.jpg"
  },
  {
    title: "Stories in Motion",
    description: "Short film contest exploring tech and humanity with creative storytelling twists.",
    color: "#6A5ACD",
    image: "https://i.pinimg.com/736x/eb/36/3f/eb363f9c05cdd3653c23da0980524092.jpg"
  },
  {
    title: "Lens on Life",
    description: "Photography series capturing humanity and technology’s future through visuals.",
    color: "#20B2AA",
    image: "https://i.pinimg.com/736x/82/cd/bd/82cdbd706b93b0afa7c5f7c19898a4b8.jpg"
  },
  {
    title: "Design for Impact",
    description: "Poster design challenge sparking conversations on empathy and responsible tech.",
    color: "#FF8C00",
    image: "https://i.pinimg.com/1200x/2a/68/1d/2a681dc4a5e84e72d27cd5cd6b974bdb.jpg"
  },
  {
    title: "Voices of Change",
    description: "On-the-spot talks blending tech, ethics, and creativity into persuasive speeches.",
    color: "#FF1493",
    image: "https://i.pinimg.com/1200x/ec/86/3e/ec863e4edea157169949686e08507fc9.jpg"
  },
  {
    title: "Human Dimensions",
    description: "3D modeling contest showcasing tech’s role in shaping better human futures.",
    color: "#32CD32",
    image: "https://i.pinimg.com/736x/70/86/28/7086285e30da4d224fb6f1d679f7d8db.jpg"
  },
  {
    title: "AidBots",
    description: "Robotics challenge building disaster relief or assistive healthcare innovations.",
    color: "#1E90FF",
    image: "https://i.pinimg.com/1200x/44/d3/14/44d314c021dd33630aba32fe93265065.jpg"
  },
];

export default function EventLineUp({ onInfoClick }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const slideshowRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto slide
  const startAutoSlide = () => {
    if (isHovered) return; // do not start if hovered
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [direction, isHovered]);

  // Dragging logic
  useEffect(() => {
    const slider = slideshowRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDown = (e) => {
      isDown = true;
      startX = e.pageX || e.touches?.[0].pageX;
      scrollLeft = slider.scrollLeft;
      stopAutoSlide(); // pause while dragging
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches?.[0].pageX;
      const walk = (x - startX) * 1.2; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const mouseUp = () => {
      if (isDown) {
        isDown = false;
        startAutoSlide(); // resume auto
      }
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mousemove", mouseMove);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mouseleave", mouseUp);

    // Touch support
    slider.addEventListener("touchstart", mouseDown);
    slider.addEventListener("touchmove", mouseMove);
    slider.addEventListener("touchend", mouseUp);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mouseleave", mouseUp);
      slider.removeEventListener("touchstart", mouseDown);
      slider.removeEventListener("touchmove", mouseMove);
      slider.removeEventListener("touchend", mouseUp);
    };
  }, []);

  // Keep current slide centered
  useEffect(() => {
    if (slideshowRef.current) {
      const slideWidth = slideshowRef.current.children[0].offsetWidth + 10;
      const offset = (slideshowRef.current.offsetWidth - slideWidth) / 2;
      slideshowRef.current.style.transform = `translateX(${-current * slideWidth + offset
        }px)`;
    }
  }, [current]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoSlide();
  };

  return (
    <section className={`event-line-up${isHovered ? ' dark-background' : ''}`}>
      <h1 className="eventlineup-heading">EVENT LINE UP</h1>
      <h5 className="eventlineup-des">The complete line‑up at a glance</h5>
      <div className="slideshow-wrapper">
        <button className="arrow left-arrow" onClick={goToPrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="slideshow" ref={slideshowRef}>
          {events.map((event, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : "inactive"}${index === current && isHovered ? " hovered" : ""}`}
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.7)), url(${event.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
              onMouseEnter={index === current ? handleMouseEnter : undefined}
              onMouseLeave={index === current ? handleMouseLeave : undefined}
            >
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button
                className="info-button"
                onClick={() => {
                  onInfoClick(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} // send event index
              >
                info →
              </button>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );

}
