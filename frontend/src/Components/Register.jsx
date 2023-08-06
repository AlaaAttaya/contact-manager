import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/utilities.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData((prevData) => {
      const updatedData = {
        firstName: prevData.firstName,
        lastName: prevData.lastName,
        email: prevData.email,
        password: prevData.password,
        confirmPassword: prevData.confirmPassword,
      };

      updatedData[fieldName] = fieldValue;

      return updatedData;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="input-types"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="input-types"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="input-types"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="input-types"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            className="input-types"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/signin" className="linkanchor">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
