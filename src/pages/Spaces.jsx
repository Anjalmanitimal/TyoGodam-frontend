import React from "react";
import { Link } from "react-router-dom";
import "./Spaces.css";
import warehouse1 from "../assets/warehouse1.jpg"; // Replace with actual images
import warehouse2 from "../assets/warehouse2.jpg";
import warehouse3 from "../assets/warehouse3.jpg";

const Spaces = () => {
  return (
    <div className="spaces-container">  
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Find the Perfect Storage Space for Your Needs</h1>
        <p>Rent secure and affordable warehouses with ease.</p>
      </section>

      {/* Featured Spaces Section */}
      <section className="featured-spaces">
        <h2>Featured Warehouse Spaces</h2>
        <div className="spaces-grid">
          <div className="space-card">
            <img src={warehouse1} alt="Warehouse 1" />
            <h3>Spacious Storage in all places </h3>
            <p>1,500 sqft • Secure & Well-Located</p>
            <Link to="/register" className="btn">Rent Now</Link>
          </div>

          <div className="space-card">
            <img src={warehouse2} alt="Warehouse 2" />
            <h3>Modern Storage Facility</h3>
            <p>2,000 sqft • Climate Controlled</p>
            <Link to="/register" className="btn">Rent Now</Link>
          </div>

          <div className="space-card">
            <img src={warehouse3} alt="Warehouse 3" />
            <h3>Budget Warehouse</h3>
            <p>1,000 sqft • Affordable & Secure</p>
            <Link to="/register" className="btn">Rent Now</Link>
          </div>
        </div>
      </section>

      {/* Blog/Informational Section */}
      <section className="blogs-section">
        <h2>Storage Tips & Insights</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <h3>How to Choose the Right Warehouse?</h3>
            <p>Find the perfect warehouse by considering these key factors...</p>
            <a href="#" className="btn">Read More</a>
          </div>

          <div className="blog-card">
            <h3>Benefits of Renting a Warehouse</h3>
            <p>Explore the advantages of renting a warehouse instead of owning one...</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spaces;
