import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-content">
        {/* You can fetch and display user's booked spaces here */}
        <h2>Your Booked Spaces</h2>
        <ul>
          {/* Example: List of booked spaces */}
          <li>Warehouse A - 1000 sq ft</li>
          <li>Storage B - 800 sq ft</li>
          <li>Space C - 1200 sq ft</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
