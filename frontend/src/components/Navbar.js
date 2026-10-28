import React, { useState } from "react";

const dashboardLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((value) => !value);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="topbar">
      <div className="navbar container-shell">
        <a href="/#top" className="logo" onClick={closeMenu}>
          Vinay<span>.dev</span>
        </a>

        <ul className="nav-links">
          {dashboardLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {dashboardLinks.map((item) => (
          <a
            href={item.href}
            key={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;