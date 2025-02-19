import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OwnerBookings.css"; // Make sure to import the correct CSS file

const OwnerBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/bookings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="owner-bookings">
      <h2>Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <span className="booking-info">{booking.User?.name}</span>
              <span className="booking-details">
                Booked: {booking.Space?.name}
              </span>
              <span className="booking-details">
                Space Size: {booking.Space?.size} sq ft
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default OwnerBookings;
