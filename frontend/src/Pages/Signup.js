import React, { useState } from "react";
import { NavBar } from "../Components/Navbar";
// import { SignUpDataToServer } from "../Utils/ServerCall";
export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password:"",
    confirmPassword:"",
    joiningAs: "none", // Set a default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // SignUpDataToServer(formData);
    
    // Add logic to send the data to your backend for user registration
  };

  return (
    <>
    <NavBar/>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
            Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
            Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Joining As:
          <select
            id="joiningAs"
            name="joiningAs"
            value={formData.joiningAs}
            onChange={handleChange}
          >
            <option value="none" disabled>
              Select an option
            </option>
            <option value="User">User</option>
            <option value="Helper">Helper</option>
          </select>
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
