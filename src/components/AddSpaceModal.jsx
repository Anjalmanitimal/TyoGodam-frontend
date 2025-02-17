import React, { useState } from "react";
import axios from "axios";

const AddSpaceModal = ({ isOpen, onClose, onAddSpace }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, location, size, price };
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/spaces/", 
        formData, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Space added:", response.data);
      onAddSpace(response.data); // Pass the new space back to parent
      onClose(); // Close modal after adding the space
    } catch (error) {
      console.error("Error adding space:", error.response?.data || error);
    }
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Space Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Size:
            <input type="number" value={size} onChange={(e) => setSize(e.target.value)} required />
          </label>
          <label>
            Price:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </label>
          <button type="submit">Save</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default AddSpaceModal;
