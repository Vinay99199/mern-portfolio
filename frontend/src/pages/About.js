import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">ABOUT ME</span>

          <h1>
            Building ideas into
            <span> real-world applications.</span>
          </h1>

          <p>
            I'm Vinay, a Computer Science student and aspiring Full Stack
            Developer focused on building modern, scalable, and user-friendly
            web applications.
          </p>

          <div className="about-hero-buttons">
            <a href="#journey" className="about-primary-btn">
              Explore My Journey
            </a>

            <a href="#focus" className="about-secondary-btn">
              What I Do
            </a>
          </div>
        </div>

        <div className="about-profile-card">
          <div className="profile-circle">
            <span>VJ</span>
          </div>

          <h3>Vinay Jaiswal</h3>
          <p>Full Stack Developer</p>

          <div className="profile-status">
            <span></span>
            Open to Opportunities
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years of Learning</p>
        </div>

        <div className="stat-card">
          <h3>MERN</h3>
          <p>Primary Stack</p>
        </div>

        <div className="stat-card">
          <h3>Java</h3>
          <p>DSA Language</p>
        </div>

        <div className="stat-card">
          <h3>2027</h3>
          <p>Expected Graduation</p>
        </div>
      </section>

      <section className="about-section" id="journey">
        <div className="section-heading">
          <span>MY JOURNEY</span>
          <h2>From learning code to building products.</h2>
        </div>

        <div className="journey-content">
          <div className="journey-text">
            <p>
              My journey in software development started with curiosity about
              how websites and applications actually work behind the screen.
              Over time, that curiosity turned into a strong interest in
              full-stack development.
            </p>

            <p>
              Today, I enjoy building complete applications — starting from
              designing the frontend, connecting APIs, handling backend
              business logic, working with databases, and implementing
              authentication and authorization.
            </p>

            <p>
              I don't just want to learn technologies individually. My goal is
              to understand how different parts of a real application work
              together as one system.
            </p>
          </div>

          <div className="journey-highlights">
            <div>
              <span>01</span>
              <h3>Learn</h3>
              <p>Understand concepts deeply instead of memorizing code.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Build</h3>
              <p>Convert concepts into practical real-world projects.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Improve</h3>
              <p>Refactor, debug and continuously improve my solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="focus">
        <div className="section-heading">
          <span>WHAT I DO</span>
          <h2>Turning ideas into functional experiences.</h2>
        </div>

        <div className="what-i-do-grid">
          <div className="work-card">
            <div className="work-icon">01</div>
            <h3>Frontend Development</h3>
            <p>
              Creating responsive, interactive and reusable user interfaces
              using React, JavaScript, HTML and CSS.
            </p>
          </div>

          <div className="work-card">
            <div className="work-icon">02</div>
            <h3>Backend Development</h3>
            <p>
              Building REST APIs, authentication systems and backend logic
              using Node.js and Express.js.
            </p>
          </div>

          <div className="work-card">
            <div className="work-icon">03</div>
            <h3>Database & APIs</h3>
            <p>
              Working with MongoDB and MySQL while designing reliable API and
              data flows for applications.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <span>TECH STACK</span>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="tech-grid">
          <div className="tech-item">
            <strong>React.js</strong>
            <span>Frontend</span>
          </div>

          <div className="tech-item">
            <strong>JavaScript</strong>
            <span>Language</span>
          </div>

          <div className="tech-item">
            <strong>Node.js</strong>
            <span>Runtime</span>
          </div>

          <div className="tech-item">
            <strong>Express.js</strong>
            <span>Backend</span>
          </div>

          <div className="tech-item">
            <strong>MongoDB</strong>
            <span>Database</span>
          </div>

          <div className="tech-item">
            <strong>MySQL</strong>
            <span>Database</span>
          </div>

          <div className="tech-item">
            <strong>Java</strong>
            <span>DSA</span>
          </div>

          <div className="tech-item">
            <strong>Git & GitHub</strong>
            <span>Version Control</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <span>EDUCATION</span>
          <h2>Academic background.</h2>
        </div>

        <div className="education-card">
          <div className="education-year">2023 — 2027</div>

          <div>
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>Kanpur Institute of Technology</p>

            <span>
              Currently developing strong foundations in software development,
              programming, data structures and full-stack web development.
            </span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <span>CURRENT FOCUS</span>
          <h2>What I'm working on right now.</h2>
        </div>

        <div className="focus-grid">
          <div className="focus-card">
            <span>01</span>
            <h3>Advanced React</h3>
            <p>
              Improving component architecture, state management and
              performance optimization.
            </p>
          </div>

          <div className="focus-card">
            <span>02</span>
            <h3>Backend Architecture</h3>
            <p>
              Learning better API design, authentication, authorization and
              scalable backend patterns.
            </p>
          </div>

          <div className="focus-card">
            <span>03</span>
            <h3>DSA & Problem Solving</h3>
            <p>
              Strengthening Java and data structures for technical interviews
              and competitive problem solving.
            </p>
          </div>

          <div className="focus-card">
            <span>04</span>
            <h3>Production Practices</h3>
            <p>
              Exploring deployment, testing, Git workflows and real-world
              software development practices.
            </p>
          </div>
        </div>
      </section>

      <section className="about-goal">
        <div>
          <span>MY GOAL</span>

          <h2>
            I want to become a developer who can build, understand and own
            complete products.
          </h2>

          <p>
            I'm continuously learning, building projects and improving my
            problem-solving skills to become ready for real-world software
            development teams.
          </p>
        </div>

        <Link to="/contact" className="about-contact-btn">
          Let's Connect →
        </Link>
      </section>
    </div>
  );
}

export default About;