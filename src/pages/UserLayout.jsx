import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar"; // Navbar stays fixed

const UserLayout = () => {
  return (
    <div className="user-layout">
      <UserNavbar /> {/* Navbar stays persistent */}
      <div className="user-content">
        <Outlet /> {/* ✅ This will load Dashboard, Spaces, or Notifications */}
      </div>
    </div>
  );
};

export default UserLayout;
