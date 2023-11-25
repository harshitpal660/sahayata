import React, { useState } from "react";
import { NavBar } from "../Components/Navbar";
// import { LogInDataToServer } from "../Utils/ServerCall";
// import AddList from "../Components/addList";
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    // LogInDataToServer(formData);
    // Add logic to send the data to your backend for authentication
  };

  return (
    <>
    <NavBar/>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {/* <AddList/> */}
    </>
  );
};
