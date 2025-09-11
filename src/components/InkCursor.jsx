import { useEffect, useRef } from "react";
import "./InkCursor.css";

export default function InkCursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const dots = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;

    // create dots
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("span");
      cursor.appendChild(dot);
      dots.current.push({ el: dot, x: mouse.current.x, y: mouse.current.y });
    }

    const handleMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      dots.current.forEach((dot) => {
        dot.x += (x - dot.x) * 0.3;
        dot.y += (y - dot.y) * 0.3;
        dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
        x = dot.x;
        y = dot.y;
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      {/* Goo filter */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div ref={cursorRef} className="Cursor"></div>
    </>
  );
}
