
import React, { useState } from "react";
import "./Nav.css";
import logo from "./poke-logo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="https://www.nicdarkthemes.com/restaurant/poke-wordpress-theme/" target="_blank" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="Restaurant Logo" />
      </a>
      <button
        className={`nav-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-menu ${menuOpen ? "show" : ""}`}>

        <a href="/" onClick={closeMenu}>Home</a>

        <a href="/about" onClick={closeMenu}>About</a>

        <a href="/services" onClick={closeMenu}>Services</a>

        <a href="/prices" onClick={closeMenu}>Prices</a>
        <div
          className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="dropdown-title"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            Menu <span className="arrow">⌄</span>
          </button>

          <div className="dropdown-content">
            <a href="/Menu" onClick={closeMenu}>Menu</a>
            <a href="/Single" onClick={closeMenu}>Single Product</a>
          </div>
        </div>

        <a href="/blog" onClick={closeMenu}>Blog</a>

        <a href="/contact" onClick={closeMenu}>Contact</a>

        <a href="/booking" className="book-btn" onClick={closeMenu}>
          BOOK NOW
        </a>

      </div>
    </nav>
  );
}

export default Nav;
