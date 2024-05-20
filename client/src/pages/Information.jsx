import React, { useState } from "react";
import asthma from "../../public/Images/asthma.png";

const Information = () => {
  const [active, setActive] = useState("heart");

  const handleActive = (item) => {
    setActive(item);
  };
  return (
    <div className="bg-[#0b9444] min-h-screen">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex justify-between border-[1px]  bg-white/50 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
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

        <div className="py-8 px-[8%] relative  ">
          <div
            className="absolute h-[60%] inset-0 bg-cover w-[50%] bg-center"
            style={{
              backgroundImage: `url(${asthma})`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <div className="border-[1px] max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                <h2 className="font-semibold text-lg py-3">Common Symptoms</h2>
                <ul>
                  <li>* Shortness of breath.</li>
                  <li>* Chest tightness or pain.</li>
                  <li>
                    * Wheezing when exhaling (especially common in children).
                  </li>
                  <li>
                    * Trouble sleeping caused by shortness of breath, coughing,
                    or wheezing.
                  </li>
                  <li>
                    * Coughing or wheezing attacks that are worsened by a
                    respiratory virus, such as a cold or the flu.
                  </li>
                </ul>
              </div>
              <div className="border-[1px] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                <h2 className="font-semibold text-lg py-3">
                  Specific Triggers
                </h2>
                <ul>
                  <li>* Physical activity (exercise-induced asthma).</li>
                  <li>* Occupational triggers (e.g., workplace irritants).</li>
                  <li>
                    * Allergy-induced asthma (e.g., pollen, mold, dust mites,
                    pet dander).
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="border-[1px] ml-[10%]  max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                <h2 className="font-semibold text-lg py-3">
                  Disease Information
                </h2>
                <p>
                  Asthma is a chronic respiratory condition characterized by
                  airway inflammation and narrowing, leading to difficulty
                  breathing, coughing, wheezing, and shortness of breath. It can
                  be triggered by allergens, exercise, cold air, and respiratory
                  infections.
                </p>
              </div>
              <div className="border-[1px] ml-[10%] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                <h2 className="font-semibold text-lg py-3">
                  Medical Resources
                </h2>
                <ul>
                  <li>
                    * Asthma and Allergy Foundation of America:
                    <a
                      href="https://www.aafa.org"
                      className="text-blue-900 font-semibold"
                      target="_blank"
                    >
                      {" "}
                      aafa.org
                    </a>
                  </li>
                  <li>
                    * Centers for Disease Control and Prevention (CDC) - Asthma:
                    <a
                      href="https://www.cdc.gov/asthma"
                      className="text-blue-900 font-semibold"
                      target="_blank"
                    >
                      {" "}
                      cdc.gov/asthma
                    </a>
                  </li>
                  <li>
                    * American Lung Association:
                    <a
                      href="https://www.lung.org"
                      className="text-blue-900 font-semibold"
                      target="_blank"
                    >
                      {" "}
                      lung.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
