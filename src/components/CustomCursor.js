import React, { useEffect } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".cursor-inner");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.50;
      cursorY += (mouseY - cursorY) * 0.50;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      if (cursorInner) {
        cursorInner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-inner"></div>
    </>
  );
}
