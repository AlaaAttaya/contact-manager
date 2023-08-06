import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/utilities.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-group">
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-types"
              required
            />
          </div>

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-types"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="linkanchor">
          Register
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
