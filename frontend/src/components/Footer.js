import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-branding">
          <div className="brand-mark">V</div>
          <div>
            <h3>Vinay<span>.dev</span></h3>
            <p>Full Stack Developer building clean, useful digital products.</p>
          </div>
        </div>

        <div className="footer-links-group">
          <span className="footer-label">Navigate</span>
          <div className="footer-nav">
            <a href="/#top">Home</a>
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
          </div>
        </div>

        <div className="footer-links-group">
          <span className="footer-label">Connect</span>
          <div className="footer-nav">
            <a href="https://github.com/Vinay99199" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vinay-jaiswal-1b470b297" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:jaiswalvinay539@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-meta">
          <span className="footer-status-dot" aria-hidden="true"></span>
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Vinay Jaiswal. All rights reserved.</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;