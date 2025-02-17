// ManageSpaces.jsx
import React from "react";
import { Link } from "react-router-dom";
import './ManageSpaces.css';

const ManageSpaces = () => {
  const spaces = [
    { id: 1, name: "Warehouse A", status: "Available" },
    { id: 2, name: "Warehouse B", status: "Occupied" },
    { id: 3, name: "Warehouse C", status: "Available" },
  ];

  return (
    <div className="manage-spaces-container">
      <h2>Manage Your Spaces</h2>
      <button className="add-space-btn">
        <Link to="/spaceowner/add-space">Add New Space</Link>
      </button>
      <div className="spaces-list">
        {spaces.map((space) => (
          <div key={space.id} className="space-card">
            <h3>{space.name}</h3>
            <p>Status: {space.status}</p>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSpaces;
