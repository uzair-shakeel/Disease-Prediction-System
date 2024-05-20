import React, { useState } from "react";
import "./disease-prediction.css";
import { Link } from "react-router-dom";
import LoginImg from "../../public/Images/newsletter.gif";
import signupImg from "../../public/Images/hero.gif";

const ProgressBar = ({ currentStep, totalSteps }) => {
  // Define the array of icons
  const icons = [
    <i className="ri-lock-password-line"></i>,
    <i class="ri-group-line"></i>,
    <i className="ri-medal-line"></i>,
  ];

  return (
    <div className="progress-bar">
      {icons.map((icon, index) => (
        <div key={index} className="progress-step">
          {/* Checkpoint circle with icon */}
          <div
            className={`progress-checkpoint ${
              currentStep >= index + 1 ? "active" : ""
            }`}
          >
            {icon}
          </div>

          {/* Connector line */}
          {index < totalSteps - 1 && (
            <div
              className={`progress-connector ${
                currentStep > index + 1 ? "completed" : ""
              }`}
            >
              {/* Connector Line */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const DiseasePrediction = () => {
  // Define state for managing current form step and form data
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    zipCode: "",
    state: "",
    city: "",
    package: "",
  });

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for sign-up
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  // Handle form submission for login
  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  // Handle navigation to the next step
  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSignUp(e);
    }
  };

  // Handle navigation to the previous step
  const handlePreviousStep = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Toggle between Sign In and Sign Up forms
  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  return (
    <section className="login-section">
      <div className="container  shadow-lg">
        <div className="user signinBx">
          <div class="imgBx">
            <img className="img-fluid" src={LoginImg} alt="Sign In Image" />
          </div>
          <div className="formBx">
            <form onSubmit={handleSignIn}>
              <h2>Subscribe NewsLetter</h2>
              <input type="email" placeholder="Email" required />
              {/* <input type="password" placeholder="Password" required /> */}
              <button type="submit" className="btn btn-login mt-2">
                Subscribe
              </button>
              <p className="signup">
                Wanna get the prediction?{" "}
                <Link to="#" onClick={toggleForm}>
                  Predict your Disease
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx ">
          <div className="formBx flex flex-col ">
            <h2 className="text-center pt-1">Answer the following Questions</h2>
            {/* Integrate ProgressBar */}
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

            {/* Multi-step form starts here */}
            <div className={`form-step ${currentStep === 1 ? "active" : ""}`}>
              <form onSubmit={handleNextStep}>
                <h2>Questions</h2>
                <label htmlFor="">Age</label>
                <input type="text" name="" placeholder="Answer" required />
                <label htmlFor="">Gender</label>
                <input type="text" name="" placeholder="Answer" required />
                <label htmlFor="">Height</label>
                <input type="text" name="" placeholder="Answer" required />
                <label htmlFor="">Weight</label>
                <input type="text" name="" placeholder="Answer" required />
                <label htmlFor="">BMI</label>
                <input type="text" name="" placeholder="Answer" required />

                <div className="flex justify-end">
                  <button type="submit" className="btn btn-next mt-1 py-3 px-7">
                    Next
                  </button>
                </div>
                <p className="signup">
                  Wanna hear from us?{" "}
                  <Link to="#" onClick={toggleForm}>
                    Newsletter
                  </Link>
                </p>
              </form>
            </div>

            <div className={`form-step ${currentStep === 2 ? "active" : ""}`}>
              <form onSubmit={handleNextStep}>
                <h2>Round II</h2>
                <div className="d-flex gap-2">
                  <label htmlFor="">
                    Do you have a family history of diabetes, heart disease,
                    cancer, etc.?
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    Have you been diagnosed with any chronic diseases? If yes,
                    specify.
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    Have you undergone any major surgeries? If yes, specify.
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    Are you currently taking any medications? If yes, specify.
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    Do you smoke? If yes, how many cigarettes per day?
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn btn-back py-3 px-7 mt-1"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-next py-3 px-7 mt-1">
                    Next
                  </button>
                </div>
              </form>
            </div>

            <div
              className={`form-step overflow-y-auto ${
                currentStep === 3 ? "active" : ""
              }`}
            >
              <form
                onSubmit={handleSignUp}
                className="h-100 d-flex flex-column overflow-y-auto"
              >
                <h2>Final Round</h2>
                <div className="d-flex gap-2">
                  <label htmlFor="">
                    Do you drink alcohol? If yes, how often and how much?
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    How often do you exercise? What type of exercise do you
                    engage in?
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">Describe your typical daily diet.</label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    Are you experiencing any of the following symptoms?
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                  <label htmlFor="">
                    Have you noticed any recent changes in your health?
                  </label>
                  <input type="text" name="" placeholder="Answer" required />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn btn-back py-3 px-7 mt-1"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-submit py-3 px-7 mt-1"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="imgBx d-flex align-items-center justify-content-center mx-auto">
            <img className="img-fluid" src={signupImg} alt="Sign Up Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseasePrediction;
