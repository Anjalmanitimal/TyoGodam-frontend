import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "./UserNavbar.css";
import logo from "../assets/TyoGodamlogo.png"; // Your logo

const UserNavbar = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    localStorage.removeItem("isLoggedIn"); // Remove isLoggedIn (if used elsewhere)
    window.dispatchEvent(new Event("storage")); // Trigger storage event
    navigate("/"); // Redirect to public home page
  }

  return (
    <header className="user-header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="TyoGodam Logo" className="logo-img" />
      </div>

      {/* Desktop Navbar Links */}
      <nav className="user-nav-links">
        <ul>
          <li>
            <NavLink to="/user" className="nav-link" end>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/user/spaces" className="nav-link">Space Listing</NavLink>
          </li>
          <li>
            <NavLink to="/user/notifications" className="nav-link">Notifications</NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="user-mobile-menu">
        <button className="menu-icon">&#9776;</button>
      </div>

      {/* Profile and Logout */}
      <div className="user-profile">
        <img src="profile-pic.png" alt="Profile" className="profile-img" />
        <button className="logout-btn" onClick={handleLogout}>Logout</button> {/* Call handleLogout */}
      </div>
    </header>
  );
};

export default UserNavbar;
