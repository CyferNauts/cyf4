import React, { useState, useEffect } from "react";
import "./Events.css";

const events = [
    {
        title: "Tech Symposium",
        desc: "A showcase of cutting-edge technology and innovation.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "1 Expo",
        desc: "Experience the best of modern art and creativity.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "2 Expo",
        desc: "Experience the best of modern art and creativity.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "3 Expo",
        desc: "Experience the best of modern art and creativity.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "4 Expo",
        desc: "Experience the best of modern art and creativity.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "7 Expo",
        desc: "Experience the best of modern art and creativity.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "6 Expo",
        desc: "Experience the best of modern art and creativity.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    },
    {
        title: "5 Fest",
        desc: "Live performances by top artists and bands.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        link: "https://cyfernode.netlify.app/sfs.jpg"
    }
];

export default function Events() {
    const [active, setActive] = useState(1);

    const prev = () => setActive((active - 1 + events.length) % events.length);
    const next = () => setActive((active + 1) % events.length);

    useEffect(() => {
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [active, events.length]);

    const getIndex = (offset) => (active + offset + events.length) % events.length;
    const visibleOffsets = [-2, -1, 0, 1, 2];
    const GAP = 270; // Increase gap for more space

    return (
        <div className="custom-carousel-container">
            <button className="carousel-btn left" onClick={prev}>&#8592;</button>

            <div className="carousel-cards">
                {visibleOffsets.map((offset) => {
                    const idx = getIndex(offset);
                    let style = {};
                    if (offset === 0) {
                        style = {
                            transform: "translateX(0) scale(1.1) rotateY(0deg)",
                            zIndex: 5,
                            opacity: 1
                        };
                    } else if (offset === -1) {
                        style = {
                            transform: `translateX(${-GAP}px) scale(0.95) rotateY(30deg)`,
                            zIndex: 4,
                            opacity: 0.7
                        };
                    } else if (offset === 1) {
                        style = {
                            transform: `translateX(${GAP}px) scale(0.95) rotateY(-30deg)`,
                            zIndex: 4,
                            opacity: 0.7
                        };
                    } else if (offset === -2) {
                        style = {
                            transform: `translateX(${-2 * GAP}px) scale(0.85) rotateY(45deg)`,
                            zIndex: 3,
                            opacity: 0.4
                        };
                    } else if (offset === 2) {
                        style = {
                            transform: `translateX(${2 * GAP}px) scale(0.85) rotateY(-45deg)`,
                            zIndex: 3,
                            opacity: 0.4
                        };
                    }
                    return (
                        <div className="carousel-card" style={style} key={idx}>
                            <img src={events[idx].image} alt={events[idx].title} />

                            {offset === 0 && ( // only on active/center card
                                <div className="carousel-overlay">
                                    {/* split title on " - " so you can pass "MACHU PICCHU - PERU" in events[idx].title */}
                                    {(() => {
                                        const parts = (events[idx].title || "").split(" - ");
                                        const main = parts[0] || "";
                                        const sub = parts[1] || "";
                                        return (
                                            <>
                                                <div className="overlay-hero">
                                                    <div className="overlay-hero-main">{main}</div>
                                                    {sub && <div className="overlay-hero-sub">— {sub}</div>}
                                                </div>
                                                <p className="overlay-subtext">{events[idx].desc}</p>
                                            </>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>

                    );
                })}
            </div>
            <button className="carousel-btn right" onClick={next}>&#8594;</button>
        </div>
    );
}
