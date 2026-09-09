import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-main">

          <div className="footer-brand">
            <h3 className="footer-logo">
              Vinay<span>.dev</span>
            </h3>

            <p className="footer-tagline">
              Full Stack Developer building practical and user-focused
              web applications with the MERN stack.
            </p>

            <p className="footer-copy">
              © {currentYear} Vinay Jaiswal. All rights reserved.
            </p>
          </div>

          <div className="footer-connect">
            <span className="footer-label">CONNECT</span>

            <div className="footer-links">
              <a
                href="https://github.com/Vinay99199"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://linkedin.com/in/vinay-jaiswal-1b470b297"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>

              <a href="mailto:jaiswalvinay539@gmail.com">
                Email <span>↗</span>
              </a>
            </div>

            <p className="footer-status">
              <span></span>
              Available for opportunities
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;