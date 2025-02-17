import React, { useState } from "react";
import SpaceOwnerNavbar from "../components/SpaceOwnerNavbar";
import AddSpaceModal from "../components/AddSpaceModal";
import "./SpaceOwnerPage.css";

const SpaceOwnerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveSpace = (spaceData) => {
    console.log("New Space Added:", spaceData);
    // TODO: Send this data to the backend
  };

  return (
    <div className="space-owner-page">
      <SpaceOwnerNavbar />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Space Owner Dashboard</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>Available Spaces</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Occupied Spaces</h3>
            <p>3</p>
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
