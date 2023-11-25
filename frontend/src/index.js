import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/Signup";
import { ProfileDetail } from "./Pages/ProfileDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loginpage" element={<Login />}></Route>
        <Route path="/signuppage" element={<SignUp />}></Route>
        <Route path="/detailspage" element={<ProfileDetail />}></Route>
      </Routes>
    </Router>
  </Provider>
);
