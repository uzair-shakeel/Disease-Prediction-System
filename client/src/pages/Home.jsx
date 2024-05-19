import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  return (
    <>
      <section className="single-hero-slide text-white flex justify-center items-center">
        <h1>Hiiii</h1>
      </section>
    </>
  );
};

export default Home;
