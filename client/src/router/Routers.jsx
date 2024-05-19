import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Welcome from "../pages/Welcome.jsx";
import AboutUs from "../pages/About.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
