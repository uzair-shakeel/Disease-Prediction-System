import React, { useEffect } from "react";
import hero from "../../public/Images/hero.gif";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { MdOnlinePrediction } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import Benefits from "../components/Benefits";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, -1);
  // }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#eafeeb] min-h-screen px-[8%] flex items-center justify-center">
        <div className="grid items-center grid-cols-2 gap-4 ">
          <div className="">
            <h1 className="text-3xl font-bold py-3">
              Your Health is Our Priority Get Instant Disease Predictions
            </h1>
            <p className="text-lg text-gray-700 ">
              Harness the power of advanced AI to predict potential diseases
              based on your symptoms. Our system provides quick and accurate
              insights, helping you stay proactive about your health. Begin your
              journey to better health with just a few clicks.
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

      <section className="bg-gradient-to-tr from-white to-[#eafeeb] min-h-screen px-[8%] text-center">
        <h1 className="text-3xl font-bold py-3">Our Services</h1>
        <p>
          Empowering Health through Proactive Prediction: Your Partner in
          Disease Prevention.
        </p>

        <div className="grid grid-cols-4 gap-4 py-10">
          <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center py-3 pt-8 px-5 rounded-lg overflow-hidden">
            <MdOutlinePersonSearch size={80} className="text-[#89c43f]" />
            <h3 className="text-xl font-semibold ">Predictive Analytics</h3>
            <p className="text-sm pt-3 text-gray-700 ">
              Our Disease Prediction System harnesses cutting-edge predictive
              analytics technology, utilizing advanced algorithms and data
              analysis methods to forecast potential health risks with
              remarkable accuracy.{" "}
            </p>
            <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
          </div>
          <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center py-3 pt-8 px-5 rounded-lg overflow-hidden">
            <MdOutlineHealthAndSafety size={80} className="text-[#89c43f]" />
            <h3 className="text-xl font-semibold">Health Assessment</h3>
            <p className="text-sm pt-3 text-gray-700">
              Experience a comprehensive health assessment like never before.
              Our system covers a wide spectrum of diseases and health
              conditions, ensuring thorough scrutiny of your well-being.
            </p>
            <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
          </div>
          <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center py-3 pt-8 px-5 rounded-lg overflow-hidden">
            <TbRibbonHealth size={80} className="text-[#89c43f]" />
            <h3 className="text-xl font-semibold">
              Personalized Recommendations
            </h3>
            <p className="text-sm pt-3 text-gray-700">
              Receive personalized health recommendations tailored precisely to
              your unique health profile. Our system utilizes sophisticated
              algorithms to analyze your data
            </p>
            <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
          </div>
          <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center py-3 pt-8 px-5 rounded-lg overflow-hidden">
            <MdOnlinePrediction size={80} className="text-[#89c43f]" />
            <h3 className="text-xl font-semibold">Predictive Analytics</h3>
            <p className="text-sm pt-3 text-gray-700">
              Our Disease Prediction System harnesses cutting-edge predictive
              analytics technology, utilizing advanced algorithms and data
              analysis methods to forecast potential health risks with
              remarkable accuracy.
            </p>
            <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
          </div>
        </div>
      </section>

      <Timeline />

      <Benefits/>
      
      <section className="bg-gradient-to-tr from-white to-white min-h-screen px-[8%] ">
        <div className="grid grid-cols-2 gap-4">
          <img src={hero} alt="" />

          <div className="flex px-[4%] flex-col items-start justify-center">
            <h1 className="text-3xl font-bold py-3">About Us</h1>
            <p className="text-md text-gray-700 ">
              Welcome to Disease Prediction System! We're committed to
              revolutionizing healthcare by leveraging cutting-edge technology
              to predict potential health risks accurately. With years of
              expertise in predictive analytics and data analysis, our dedicated
              team is passionate about improving lives through early disease
              detection. At Disease Prediction System, we believe in the power
              of data-driven insights to empower individuals to take control of
              their health. Our mission is to provide accessible and reliable
              predictive analytics solutions, enabling proactive healthcare
              decisions and ultimately improving health outcomes. Join us on our
              journey to transform healthcare with innovation and compassion.
              Together, we can make a difference in the fight against diseases.
            </p>

            <Link
              to="/about"
              className="bg-[#0b9444] flex gap-2 items-center my-6 mr-4 py-3 px-5 text-white font-semibold rounded-lg"
            >
              Read More
              <FiArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Home;
