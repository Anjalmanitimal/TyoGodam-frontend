import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/TyoGodamlogo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="TyoGodam Logo" />
        </Link>
      </div>

      {/* Desktop and Mobile Navigation */}
      <nav
        className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
      >
        <Link to="/register">Register</Link>
        <Link to="/spaces">Spaces</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span>&#9776;</span> {/* Hamburger icon */}
      </div>
    </header>
  );
};

export default Header;
