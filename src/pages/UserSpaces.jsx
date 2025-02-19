import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserSpaces.css";

const UserSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [searchSize, setSearchSize] = useState("");

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        const response = await axios.get("http://localhost:5000/spaces", {
          headers: { Authorization: `Bearer ${token}` }, // Send token in headers
        });
        setSpaces(response.data);
      } catch (error) {
        console.error("Error fetching spaces:", error);
      }
    };
  
    fetchSpaces();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchSize(value);
  };

  return (
    <div className="user-spaces">
      <h2>Available Spaces</h2>
      <input
        type="number"
        className="search-input"
        placeholder="Search by sq ft"
        value={searchSize}
        onChange={handleSearch}
      />
      <div className="space-list">
        {spaces
          .filter((space) => space.size >= searchSize)
          .map((space) => (
            <div key={space.id} className="space-card">
              <h3>{space.name}</h3>
              <p>Location: {space.location}</p>
              <p>Size: {space.size} sq ft</p>
              <p>Price: ${space.price}</p>
              <button className="view-btn">View Details</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSpaces;
