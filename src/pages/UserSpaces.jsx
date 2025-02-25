import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserSpaces.css";

const UserSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [searchSize, setSearchSize] = useState("");

  useEffect(() => {
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

    fetchSpaces();
  }, []);

  const handleSearch = (e) => {
    setSearchSize(e.target.value);
  };

  const handleBooking = async (spaceId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // ✅ Retrieve user ID from local storage
  
      if (!userId) {
        console.error("User ID not found. Ensure the user is logged in.");
        alert("Please log in before booking a space.");
        return;
      }
  
      console.log("Booking request with:", { spaceId, userId }); // ✅ Debugging log
  
      const response = await axios.post(
        "http://localhost:5000/bookings",
        { spaceId, userId: parseInt(userId) }, // ✅ Ensure userId is an integer
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      if (response.status === 201) {
        alert("Booking successful!");
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error booking space:", error);
      alert("Error booking space. Try again later.");
    }
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
              
              <button className="book-btn" onClick={() => handleBooking(space.id)}>
                Book Space
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSpaces;
