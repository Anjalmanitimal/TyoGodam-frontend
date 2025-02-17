import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSpaceModal from "../components/AddSpaceModal";
import "./UserSpaces.css";

const UserSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [searchSize, setSearchSize] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch spaces from the backend
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/spaces", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,  // Ensure user is authenticated
          },
        });

        setSpaces(response.data);  // Set the spaces state
        setFilteredSpaces(response.data);  // Set the filtered spaces state
      } catch (error) {
        console.error("Error fetching spaces:", error);
      }
    };

    fetchSpaces();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchSize(value);
    setFilteredSpaces(
      spaces.filter((space) => space.size >= value)  // Filter spaces by size
    );
  };

  const handleSaveSpace = (newSpace) => {
    setSpaces((prevSpaces) => [...prevSpaces, newSpace]);  // Add new space to the state
    setFilteredSpaces((prevSpaces) => [...prevSpaces, newSpace]);  // Add to filtered list as well
  };

  return (
    <div className="user-spaces">
      <h2>Available Spaces</h2>

      {/* Button to open the modal */}
      <button onClick={() => setIsModalOpen(true)} className="add-space-btn">
        Add Space
      </button>

      {/* Search Bar */}
      <input
        type="number"
        className="search-input"
        placeholder="Search by sq ft"
        value={searchSize}
        onChange={handleSearch}
      />

      {/* Spaces List */}
      <div className="space-list">
        {filteredSpaces.map((space) => (
          <div key={space.id} className="space-card">
            <h3>{space.name}</h3>
            <p>Location: {space.location}</p>
            <p>Size: {space.size} sq ft</p>
            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>

      {/* Add Space Modal */}
      <AddSpaceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSpace}  // Handle saving new space
      />
    </div>
  );
};

export default UserSpaces;
