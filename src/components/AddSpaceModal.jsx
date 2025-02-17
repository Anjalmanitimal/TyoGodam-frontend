import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./AddSpaceModal.css";

const AddSpaceModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    size: "",
    price: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log("Sending token:", token);  // Ensure token is being retrieved correctly
  
      const response = await axios.post(
        "http://localhost:5000/api/spaces/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token for authentication
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Space added:", response.data);
      onClose(); // Close modal after success
      window.location.reload(); // Refresh to show the new space in UserSpaces
    } catch (error) {
      console.error("Error adding space:", error.response?.data || error);
    }
  };
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Space</h2>
        <form onSubmit={handleSubmit}>
          <label>Space Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Size (sq ft):</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />

          <label>Price ($):</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <div className="modal-actions">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="close-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpaceModal;
