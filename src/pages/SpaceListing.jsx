import React, { useState } from "react";

const SpaceListing = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="space-listing-page">
      <h1>Space Listings</h1>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Search by sq ft"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="space-results">
        {/* Filtered spaces */}
        <h2>Available Spaces</h2>
        <ul>
          {/* This would be dynamic based on search */}
          <li>Warehouse A - 1000 sq ft</li>
          <li>Storage B - 800 sq ft</li>
          <li>Space C - 1200 sq ft</li>
        </ul>
      </div>
    </div>
  );
};

export default SpaceListing;
