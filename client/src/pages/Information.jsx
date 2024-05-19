import React, { useState } from "react";

const Information = () => {
  const [active, setActive] = useState("heart");

  const handleActive = (item) => {
    setActive(item);
  };
  return (
    <div className="bg-[#0b9444] min-h-screen">
      <div className="flex items-center justify-center py-4">
        <div className="flex justify-between border-[1px]  bg-white/50 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md w-[90%] backdrop-filter">
          <button
            onClick={() => handleActive("diabetes")}
            className={
              active === "diabetes"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-14 text-white rounded-lg shadow-md"
                : "py-3 px-14  rounded-lg "
            }
          >
            Diabetes
          </button>
          <button
            onClick={() => handleActive("brain")}
            className={
              active === "brain"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-14 text-white rounded-lg shadow-md"
                : "py-3 px-14  rounded-lg "
            }
          >
            Brain Tumor
          </button>
          <button
            onClick={() => handleActive("blood")}
            className={
              active === "blood"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-14 text-white rounded-lg shadow-md"
                : "py-3 px-14  rounded-lg "
            }
          >
            Blood Cancer
          </button>
          <button
            onClick={() => handleActive("heart")}
            className={
              active === "heart"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-14 text-white rounded-lg shadow-md"
                : "py-3 px-14  rounded-lg "
            }
          >
            Heart Disease
          </button>
          <button
            onClick={() => handleActive("asthma")}
            className={
              active === "asthma"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-14 text-white rounded-lg shadow-md"
                : "py-3 px-14  rounded-lg "
            }
          >
            Asthma
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
