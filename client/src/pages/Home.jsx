import React, { useEffect } from "react";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, -1);
  // }, []);

  return (
    <>
      <Hero />

      <Services />

      <Timeline />

      <Benefits />

      <About />

      <FAQ />
    </>
  );
};

export default Home;
