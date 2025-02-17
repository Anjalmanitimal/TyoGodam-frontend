
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import UserNavbar from "./components/UserNavbar";

const App = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      console.log("Token found:", token); // Debugging log
      setIsAuthenticated(!!token); // Proper authentication check
    };

    checkAuth(); // Check auth on initial render
    window.addEventListener("storage", checkAuth); // Listen for storage events

    return () => {
      window.removeEventListener("storage", checkAuth); // Cleanup
    };
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    <>
      {/* Shows Header for public users, UserNavbar for logged-in users */}
      {isAuthenticated ? <UserNavbar /> : <Header />}
      <Outlet /> {/* Loads child pages properly */}
    </>
  );
};

export default App;