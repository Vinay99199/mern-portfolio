import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/vinayimage.png";

const words = [
  "Aspiring Full Stack Developer",
  "MERN Stack Enthusiast",
  "Passionate Problem Solver",
];

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const imageRef = useRef(null);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;
    const fullText = words[loopNum % words.length];

    if (!isDeleting) {
      if (text !== fullText) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleMouseMove = (e) => {
    const image = imageRef.current;

    if (!image) return;

    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    image.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;

    if (!image) return;

    image.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
  `;
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Vinay</h1>

        <div className="typing">
          {text}
          <span className="cursor">|</span>
        </div>

        <p>
          I'm a final-year Computer Science student and an aspiring Full Stack
          Developer with a strong interest in the MERN stack. I enjoy building
          web applications, writing clean and maintainable code, and learning
          new technologies to solve real-world problems.
        </p>

        <Link to="/contact" className="cta-button">
          Get In Touch
        </Link>
      </div>

      <div
        ref={imageRef}
        className="hero-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-image-glow"></div>

        <div className="hero-image-card">
          <div className="hero-image-shine"></div>

          <img
            src={hero}
            alt="Vinay Profile"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x300";
            }}
          />
        </div>

        <div className="hero-image-orbit orbit-one"></div>
        <div className="hero-image-orbit orbit-two"></div>
      </div>
    </section>
  );
}

export default Hero;