import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserPage.css";

const UserPage = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchSpaces();
    const interval = setInterval(fetchSpaces, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="user-page">
      <div className="dashboard-header">
        <h1>Explore Available Warehouse Spaces</h1>
        <p>Browse and find the perfect space to meet your storage needs.</p>
      </div>

      {loading ? (
        <p>Loading spaces...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : spaces.length > 0 ? (
        <div className="space-listing">
          {spaces.map((space) => (
  <div key={space.id} className="space-card">
   <img
  src={space.imageUrl ? `http://localhost:5000${space.imageUrl}` : "https://via.placeholder.com/300x200?text=No+Image"}
  alt={space.name}
  className="space-image"
/>
    <div className="space-info">
      <h3>{space.name}</h3>
      <p>{space.location}</p>
      <p className="size">Size: {space.size} sq ft</p>
      <p className="price">${space.price}/month</p>
      <button className="view-btn">View Details</button>
    </div>
  </div>
))}
        </div>
      ) : (
        <p>No spaces available. Please check back later!</p>
      )}
    </div>
  );
};

export default UserPage;
