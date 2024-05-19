import React, { useEffect } from "react";
import hero from "../../public/Images/hero.gif";
import { MdOutlinePersonSearch } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#eafeeb] min-h-screen px-[8%] flex items-center justify-center">
        <div className="grid items-center grid-cols-2 gap-4 ">
          <div className="">
            <h1 className="text-3xl font-bold py-3">
              Your Health is Our Priority Get Instant Disease Predictions
            </h1>
            <p className="text-lg ">
              Harness the power of advanced AI to predict potential diseases
              based on your symptoms. Our system provides quick and accurate
              insights, helping you stay proactive about your health. Begin your
              journey to better health with just a few clicks.
            </p>
            <div className="pt-8 ">
              <button className="bg-[#0A6847] mr-4 py-3 px-5 text-white font-semibold rounded-lg">
                Test Now
              </button>
              <button className="text-[#0A6847] border-[#0A6847] border-[1px] mr-4 py-3 px-5  font-semibold rounded-lg">
                Learn More about us
              </button>
            </div>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-white to-[#eafeeb] min-h-screen px-[8%] text-center">
        <h1 className="text-3xl font-bold py-3">Our Services</h1>
        <p>
          Empowering Health through Proactive Prediction: Your Partner in
          Disease Prevention.
        </p>

        <div className="grid grid-cols-4 gap-4 py-10">
          <div className="border-[1px] border-[#F3CA52] flex flex-col items-center py-3 pt-8 px-5 rounded-lg">
            <MdOutlinePersonSearch size={80} className="text-[#F3CA52]" />
            <h3 className="text-xl font-semibold ">Predictive Analytics</h3>
            <p className="text-sm pt-3 text-gray-700 ">
              Our Disease Prediction System harnesses cutting-edge predictive
              analytics technology, utilizing advanced algorithms and data
              analysis methods to forecast potential health risks with
              remarkable accuracy.{" "}
            </p>
          </div>
          <div className="border-[1px] border-[#F3CA52] flex flex-col items-center py-3 pt-8 px-5 rounded-lg  ">
            <MdOutlinePersonSearch size={80} className="text-[#F3CA52]" />
            <h3 className="text-xl font-semibold">Health Assessment</h3>
            <p className="text-sm pt-3 text-gray-700">
              Experience a comprehensive health assessment like never before.
              Our system covers a wide spectrum of diseases and health
              conditions, ensuring thorough scrutiny of your well-being.
            </p>
          </div>
          <div className="border-[1px] border-[#F3CA52] flex flex-col items-center py-3 pt-8 px-5 rounded-lg">
            <MdOutlinePersonSearch size={80} className="text-[#F3CA52]" />
            <h3 className="text-xl font-semibold">
              Personalized Recommendations
            </h3>
            <p className="text-sm pt-3 text-gray-700">
              Receive personalized health recommendations tailored precisely to
              your unique health profile. Our system utilizes sophisticated
              algorithms to analyze your data
            </p>
          </div>
          <div className="relative border border-yellow-500 flex flex-col items-center py-3 pt-8 px-5 rounded-lg overflow-hidden">
            <MdOutlinePersonSearch size={80} className="text-yellow-500" />
            <h3 className="text-xl font-semibold">Predictive Analytics</h3>
            <p className="text-sm pt-3 text-gray-700">
              Our Disease Prediction System harnesses cutting-edge predictive
              analytics technology, utilizing advanced algorithms and data
              analysis methods to forecast potential health risks with
              remarkable accuracy.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 transition-all duration-500 transform translate-y-full opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
