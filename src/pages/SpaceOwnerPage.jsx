import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceOwnerNavbar from "../components/SpaceOwnerNavbar";
import AddSpaceModal from "../components/AddSpaceModal";
import "./SpaceOwnerPage.css";

const SpaceOwnerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spaces, setSpaces] = useState([]); // State for spaces

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Function to fetch spaces
  const fetchSpaces = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/spaces", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSpaces(response.data); // Set spaces for the logged-in user
    } catch (error) {
      console.error("Error fetching spaces:", error);
    }
  };

  // Fetch spaces when component mounts
  useEffect(() => {
    fetchSpaces();
  }, []);

  const handleSaveSpace = (spaceData) => {
    console.log("New Space Added:", spaceData);
    // TODO: Send this data to the backend to create a new space
    fetchSpaces(); // Refresh the spaces list after adding a new one
  };

  return (
    <div className="space-owner-page">
      <SpaceOwnerNavbar />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Space Owner Dashboard</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>Available Spaces</h3>
            <p>{spaces.length}</p> {/* Display the actual number of spaces */}
          </div>
          <div className="stat-card">
            <h3>Occupied Spaces</h3>
            <p>{spaces.filter(space => space.status === 'occupied').length}</p> {/* Filter occupied spaces */}
          </div>
        </div>
        <div className="additional-info">
          <h3>Your Spaces</h3>
          <button className="add-space-btn" onClick={handleOpenModal}>
            Add New Space
          </button>
        </div>
      </div>

      {/* AddSpaceModal component */}
      <AddSpaceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveSpace}
      />
    </div>
  );
};

export default SpaceOwnerPage;
