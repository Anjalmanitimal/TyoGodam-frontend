import React, { useState, useEffect } from "react";
import "./UserPage.css";

// Mock data for spaces (you can replace this with real API data)
const mockSpaces = [
  { id: 1, name: "Warehouse A", location: "New York", size: "1000 sq ft", price: "$2000" },
  { id: 2, name: "Storage B", location: "San Francisco", size: "800 sq ft", price: "$1500" },
  { id: 3, name: "Space C", location: "Los Angeles", size: "1200 sq ft", price: "$2500" },
];

const UserPage = () => {
  const [spaces, setSpaces] = useState([]);

  // Simulate fetching data (replace with an API call)
  useEffect(() => {
    setSpaces(mockSpaces);
  }, []);

  return (
    <div className="user-page">
      {/* Dashboard Section */}
      <div className="dashboard-header">
        <h1>Explore Available Warehouse Spaces</h1>
        <p>Browse and find the perfect space to meet your storage needs.</p>
      </div>

      {/* Space Listing */}
      <div className="space-listing">
        {spaces.map((space) => (
          <div key={space.id} className="space-card">
            <img src={`https://via.placeholder.com/300x200?text=${space.name}`} alt={space.name} className="space-image" />
            <div className="space-info">
              <h3>{space.name}</h3>
              <p>{space.location}</p>
              <p className="size">Size: {space.size}</p>
              <p className="price">{space.price}/month</p>
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
