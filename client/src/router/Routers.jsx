import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
