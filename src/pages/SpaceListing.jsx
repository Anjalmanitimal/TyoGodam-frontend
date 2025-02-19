import React, { useState, useEffect } from "react";
import axios from "axios";

const SpaceListing = () => {
  const [search, setSearch] = useState("");
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  // Fetch spaces from the backend
  const fetchSpaces = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/spaces", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSpaces(response.data);
    } catch (err) {
      console.error("Error fetching spaces:", err);
      setError("Failed to load spaces. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Filter spaces dynamically based on search input
  const filteredSpaces = spaces.filter((space) =>
    space.size.toString().includes(search)
  );

  return (
    <div className="space-listing-page">
      <h1>Space Listings</h1>

      <div className="search-bar">
        <input
          type="number"
          placeholder="Search by sq ft"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading spaces...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : filteredSpaces.length > 0 ? (
        <div className="space-results">
          <h2>Available Spaces</h2>
          <ul>
            {filteredSpaces.map((space) => (
              <li key={space.id}>
                {space.name} - {space.size} sq ft
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No spaces found matching your search.</p>
      )}
    </div>
  );
};

export default SpaceListing;
