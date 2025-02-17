import React, { useState } from "react";
import axios from "axios";
import "./AddSpaceModal.css";

const AddSpaceModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    price: "",
  });

  if (!isOpen) return null; // If modal is not open, return nothing

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Get token from localStorage

      const response = await axios.post(
        "http://localhost:5000/api/spaces/create",  // Your backend URL
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Send token in header
          },
        }
      );

      onSave(response.data);  // Send the newly created space data back to the parent
      onClose();  // Close the modal after saving
    } catch (error) {
      console.error("Error adding space:", error);
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

          <label>Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
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
