import React from "react";
import { Link } from "react-router-dom";

const SpaceOwnerNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/spaceowner">Dashboard</Link></li>
        <li><Link to="/spaceowner/spaces">My Spaces</Link></li>
        <li><Link to="/spaceowner/bookings">Bookings</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default SpaceOwnerNavbar;
