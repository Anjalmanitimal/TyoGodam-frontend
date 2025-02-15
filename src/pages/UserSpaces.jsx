import React, { useState } from 'react';
import './UserSpaces.css';

const UserSpaces = () => {
  const [spaces] = useState([
    { id: 1, name: "Warehouse A", location: "New York", size: 1000 },
    { id: 2, name: "Storage B", location: "San Francisco", size: 800 },
    { id: 3, name: "Space C", location: "Los Angeles", size: 1200 },
    { id: 4, name: "Storage D", location: "Chicago", size: 1500 }
  ]);

  const [filteredSpaces, setFilteredSpaces] = useState(spaces);
  const [searchSize, setSearchSize] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchSize(value);
    setFilteredSpaces(
      spaces.filter((space) => space.size >= value)
    );
  };

  return (
    <div className="user-spaces">
      <h2>Available Spaces</h2>
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
    </div>
  );
};

export default UserSpaces;
