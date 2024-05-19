import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Routers from "./router/Routers";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome"; // Import the Welcome component

function App() {
  const location = useLocation();

  // Render Welcome component if route is '/welcome', otherwise render Header, Routers, and Footer
  return location.pathname === "/welcome" ? (
    <Welcome />
  ) : (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
