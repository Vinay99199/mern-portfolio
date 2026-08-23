import React from "react";

function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-hero">
        <div>
          <span className="resume-badge">MY RESUME</span>

          <h1>
            My professional
            <span> journey & skills.</span>
          </h1>

          <p>
            A quick overview of my education, technical skills, projects,
            and experience as an aspiring Full Stack Developer.
          </p>

          <div className="resume-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-primary-btn"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-secondary-btn"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="resume-preview-card">
          <div className="resume-paper">
            <div className="paper-header">
              <div className="paper-avatar">VJ</div>

              <div>
                <h3>Vinay Jaiswal</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>

            <div className="paper-line large"></div>
            <div className="paper-line"></div>
            <div className="paper-line"></div>

            <div className="paper-section">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="paper-section">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-info">
        <div className="resume-section-heading">
          <span>PROFILE</span>
          <h2>Developer at a glance.</h2>
        </div>

        <div className="resume-info-grid">
          <div className="resume-info-card">
            <span>01</span>
            <h3>Education</h3>
            <p>
              B.Tech in Computer Science from Kanpur Institute of Technology,
              expected graduation in 2027.
            </p>
          </div>

          <div className="resume-info-card">
            <span>02</span>
            <h3>Full Stack Development</h3>
            <p>
              Experience building responsive frontend applications and
              backend APIs using the MERN stack.
            </p>
          </div>

          <div className="resume-info-card">
            <span>03</span>
            <h3>Problem Solving</h3>
            <p>
              Currently strengthening Java, Data Structures and Algorithms
              for technical interviews.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-skills">
        <div className="resume-section-heading">
          <span>TECHNICAL SKILLS</span>
          <h2>Tools and technologies.</h2>
        </div>

        <div className="resume-skill-list">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>REST APIs</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Java</span>
          <span>Data Structures & Algorithms</span>
        </div>
      </section>

      <section className="resume-cta">
        <div>
          <span>READY TO CONNECT?</span>

          <h2>
            Interested in working together or discussing an opportunity?
          </h2>
        </div>

        <a href="/contact" className="resume-contact-btn">
          Contact Me →
        </a>
      </section>
    </main>
  );
}

export default Resume;