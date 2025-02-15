import React from "react";
import { Outlet } from "react-router-dom";
import SpaceOwnerNavbar from "../components/SpaceOwnerNavbar"; // New Navbar

const SpaceOwnerLayout = () => {
  return (
    <>
      <SpaceOwnerNavbar />
      <Outlet />
    </>
  );
};

export default SpaceOwnerLayout;
