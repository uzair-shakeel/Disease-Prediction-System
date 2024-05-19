import React from "react";
import hero from "../../public/Images/hero.gif";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#eafeeb] min-h-screen px-[8%] flex items-center justify-center">
      <div className="grid items-center grid-cols-2 gap-4 ">
        <div className="">
          <h1 className="text-3xl font-bold py-3">
            Your Health is Our Priority Get Instant Disease Predictions
          </h1>
          <p className="text-lg text-gray-700 ">
            Harness the power of advanced AI to predict potential diseases based
            on your symptoms. Our system provides quick and accurate insights,
            helping you stay proactive about your health. Begin your journey to
            better health with just a few clicks.
          </p>
          <div className="pt-8 ">
            <button className="bg-[#0b9444] mr-4 py-3 px-5 text-white font-semibold rounded-lg">
              Test Now
            </button>
            <button className="text-[#0b9444] border-[#0b9444] border-[1px] mr-4 py-3 px-5  font-semibold rounded-lg">
              Learn More about us
            </button>
          </div>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
