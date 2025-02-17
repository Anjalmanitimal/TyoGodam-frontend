import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure Axios is installed
import "./UserPage.css";

const UserPage = () => {
  const [spaces, setSpaces] = useState([]);

  // Fetch spaces from the backend
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/spaces");
        setSpaces(response.data); // ✅ Set data from backend
      } catch (error) {
        console.error("Error fetching spaces:", error);
      }
    };

    fetchSpaces(); // Fetch data when component mounts
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
        {spaces.length > 0 ? (
          spaces.map((space) => (
            <div key={space.id} className="space-card">
              <img
                src={`https://via.placeholder.com/300x200?text=${space.name}`}
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
          ))
        ) : (
          <p>No spaces available. Please check back later!</p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
