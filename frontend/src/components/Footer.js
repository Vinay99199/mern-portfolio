import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <h3 className="footer-logo">Vinay.dev</h3>

        <p className="footer-tagline">
          Full Stack Developer specializing in MERN stack applications.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Vinay99199"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vinay-jaiswal-1b470b297"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:jaiswalvinay539@gmail.com">
            Email
          </a>
        </div>

        <p className="footer-copy">
          © {currentYear} Vinay. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;