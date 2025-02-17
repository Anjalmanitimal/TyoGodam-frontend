import React, { useState, useEffect } from "react";
import AddSpaceModal from "../components/AddSpaceModal"; // Import modal component
import axios from "axios";


const ManageSpaces = () => {
  const [spaces, setSpaces] = useState([]); 
  const [isAddSpaceModalOpen, setAddSpaceModalOpen] = useState(false);
  const [editingSpace, setEditingSpace] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: "", location: "", size: "", price: "" });

  // Fetch spaces from backend
  const fetchSpaces = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/spaces", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSpaces(response.data);
    } catch (error) {
      console.error("Error fetching spaces:", error);
    }
  };  

  useEffect(() => {
    fetchSpaces();
  }, []);

  // Open edit modal
  const handleEditClick = (space) => {
    setEditingSpace(space);
    setUpdatedData({ ...space }); // Populate form with existing data
  };

  // Handle input changes in edit form
  const handleInputChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  // Submit updated data to backend
  const handleEditSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/spaces/${editingSpace.id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update UI
      setSpaces((prevSpaces) =>
        prevSpaces.map((space) => (space.id === editingSpace.id ? updatedData : space))
      );
      
      setEditingSpace(null); // Close edit modal
    } catch (error) {
      console.error("Error updating space:", error);
    }
  };

  // Handle deleting a space
  const handleDeleteSpace = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/spaces/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove deleted space from UI
      setSpaces((prevSpaces) => prevSpaces.filter((space) => space.id !== id));
    } catch (error) {
      console.error("Error deleting space:", error);
    }
  };

  return (
    <div className="manage-spaces">
      <h2>Manage Spaces</h2>

      <button className="add-space-btn" onClick={() => setAddSpaceModalOpen(true)}>
        Add New Space
      </button>

      <AddSpaceModal isOpen={isAddSpaceModalOpen} onClose={() => setAddSpaceModalOpen(false)} onAddSpace={fetchSpaces} />

      {/* Render spaces */}
      <div className="space-list">
        {spaces.map((space) => (
          <div key={space.id} className="space-card">
            <h3>{space.name}</h3>
            <p>{space.location}</p>
            <p>Size: {space.size}</p>
            <p>Price: {space.price}</p>
            <button onClick={() => handleEditClick(space)}>Edit</button>
            <button onClick={() => handleDeleteSpace(space.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Edit Space Modal */}
      {editingSpace && (
        <div className="edit-modal">
          <h3>Edit Space</h3>
          <input type="text" name="name" value={updatedData.name} onChange={handleInputChange} />
          <input type="text" name="location" value={updatedData.location} onChange={handleInputChange} />
          <input type="text" name="size" value={updatedData.size} onChange={handleInputChange} />
          <input type="text" name="price" value={updatedData.price} onChange={handleInputChange} />
          <button onClick={handleEditSubmit}>Save Changes</button>
          <button onClick={() => setEditingSpace(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ManageSpaces;
