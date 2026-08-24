import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/vinayimage.jpeg";

const words = [
  "Aspiring Full Stack Developer",
  "MERN Stack Enthusiast",
  "Passionate Problem Solver"
];
function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

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

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Vinay </h1>

        <div className="typing">
          {text}
          <span className="cursor">|</span>
        </div>

        <p>
          I'm a final-year Computer Science student and an aspiring Full Stack Developer with a 
          strong interest in the MERN stack. I enjoy building web applications, writing clean 
          and maintainable code, and learning new technologies to solve real-world problems.
        </p>

        <Link to="/contact" className="cta-button">
          Get In Touch
        </Link>
      </div>

      <div className="hero-image">
        <img
          src={hero}
          alt="Vinay Profile"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x300";
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
