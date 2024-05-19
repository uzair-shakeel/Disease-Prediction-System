import { useState } from "react";
import Routers from "./router/Routers";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
