import React, { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame;

    const interactiveSelector = `
      a,
      button,
      .skill-card,
      .project-card,
      .resume-info-card,
      .work-card,
      .tech-item,
      .focus-card,
      .journey-highlights > div
    `;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      const card = e.target.closest(
        ".skill-card, .project-card, .resume-info-card, .work-card, .tech-item, .focus-card, .journey-highlights > div"
      );

      if (card) {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest(interactiveSelector);

      if (interactive) {
        ring.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e) => {
      const interactive = e.target.closest(interactiveSelector);

      if (interactive) {
        ring.classList.remove("cursor-hover");
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot"></div>
      <div ref={ringRef} className="custom-cursor-ring"></div>
    </>
  );
}

export default CustomCursor;