import React, { useState } from "react";

import "./Register.css";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User", // Default role
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });
  
      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const data = await response.json(); // Parse JSON only if response is OK
        console.log("Registration successful:", data);
        alert("Registration successful! Please log in.");
        navigate("/login"); // Redirect to the login page
      } else {
        // Handle non-OK responses (e.g., 400, 500)
        const errorData = await response.json(); // Parse error response
        console.error("Registration failed:", errorData.message);
        alert(errorData.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error during registration:", error);
      alert("Something went wrong. Please check your connection and try again.");
    }
  };
  
  

  return (
    <div className="registration-page">
      <div className="register-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* Role Selection Dropdown */}
          <div className="form-group">
            <label htmlFor="role">Register As</label>
            <select id="role" value={formData.role} onChange={handleRoleChange}>
              <option value="User">User</option>
              <option value="Space Owner">Space Owner</option>
            </select>
          </div>
          <button type="submit">Register</button>
          {/* Login Link */}
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              <strong>Login</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
