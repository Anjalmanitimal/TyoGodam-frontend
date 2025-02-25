import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SpaceOwnerNavbar.css";

const SpaceOwnerNavbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Redirect to UserPage
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2 className="logo">TyoGodam</h2>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/spaceowner">Dashboard</Link></li>
          <li><Link to="/spaceowner/manage">Manage Spaces</Link></li>
          <li><Link to="/spaceowner/bookings">Owner Bookings</Link></li>
          {/* <li><Link to="/spaceowner/profile">Profile</Link></li> */}
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpaceOwnerNavbar;
