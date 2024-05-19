import React from "react";
import img1 from "../../public/Images/disease.jpg";
import img2 from "../../public/Images/predict.avif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="grid grid-cols-2 h-screen">
        <Link to="/home">
          <motion.div
            className="relative group "
            initial={{ y: 1500 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              duration: 2,
            }}
          >
            <div className="h-full w-full">
              <img src={img1} alt="" className="object-cover w-full h-full" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl p-2">Let's Go to the</p>
              <h1 className="text-5xl">Home</h1>
            </div>
          </motion.div>
        </Link>
        <motion.div
          className="relative group "
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{
            type: "tween",
            duration: 2,
          }}
        >
          <img src={img2} alt="" className="image" />
          <div className="absolute font-light inset-0 cursor-pointer bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <p className="text-xl p-2">Try out the</p>
            <h1 className="text-5xl">Prediction System</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
