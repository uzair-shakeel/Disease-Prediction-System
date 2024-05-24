import React, { useState } from "react";
import axios from "axios";
import "./disease-prediction.css";
import { Link, useNavigate  } from "react-router-dom";
import LoginImg from "../../public/Images/newsletter.gif";
import signupImg from "../../public/Images/hero.gif";

const ProgressBar = ({ currentStep, totalSteps }) => {
  // Define the array of icons
  const icons = [
    <i className="ri-lock-password-line"></i>,
    <i className="ri-group-line"></i>,
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

const Tooltip = ({info}) =>{
  return(
    <div class="relative flex flex-col items-center group">
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
    </svg>
    <div class="absolute bottom-0 w-[150px] flex flex-col items-center hidden mb-5 group-hover:flex">
      <span class="relative rounded-md z-10 p-3 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
      {info}
      </span>
      <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
    </div>
  </div>
  )
}

const DiseasePrediction = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();
  
  const [symptoms, setSymptoms] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSymptoms({ ...symptoms, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    predictDisease(e);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSignUp(e);
    }
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  const predictDisease = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/predict", { symptoms })
      .then((response) => {
        setPrediction(response.data.result);
        navigate('/heart-disease-result', { state: { prediction: response.data.result } });
      })
      .catch((error) => {
        alert("An Error Occured")
        console.error("Error predicting disease:", error);
      });
  };

  return (
    <section className="login-section">
      <div className="container shadow-lg active">
        <div className="user signinBx">
          <div className="imgBx">
            <img className="img-fluid" src={LoginImg} alt="Sign In Image" />
          </div>
          <div className="formBx items-center justify-center">
            <form onSubmit={handleSignIn}>
              <h2>Subscribe NewsLetter</h2>
              <input type="email" placeholder="Email" required />
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
        <div className="user signupBx">
          <div className="formBx flex flex-col">
            <h1 className="text-center font-bold text-3xl">Heart Disease Prediction</h1>
            <h2 className="text-center pt-1">Answer the following Questions</h2>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            <div className={`form-step ${currentStep === 1 ? "active" : ""}`}>
              <form onSubmit={handleNextStep}>
                <h2>Questions</h2>
                <label className="flex items-center justify-between" htmlFor="age">
                Age
                <Tooltip info={<ul className="space-y-1">
                <li> Age In Years </li>
                </ul>}/>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Answer"
                  value={symptoms.age}
                  onChange={handleInputChange}
                  required
                />
                <label className="flex items-center justify-between" htmlFor="sex">
                Gender
                <Tooltip info={<ul className="space-y-1">
                <li> 0 = Female </li>
                <li> 1 = Male </li>
                </ul>}/>
                </label>
                
                <input
                  type="number"
                  name="sex"
                  placeholder="Answer"
                  value={symptoms.sex}
                  onChange={handleInputChange}
                  required
                />
                <label className="flex items-center justify-between" htmlFor="cp">
                Chest Pain Type 
                <Tooltip info={<ul className="space-y-1">
                <li> 0: Typical angina </li>
                <li> 1: Atypical angina </li>
                <li> 2: Non-anginal pain </li>
                <li> 3: Asymptomatic </li> </ul>}/>
                </label>
                <input
                  type="number"
                  name="cp"
                  placeholder="Answer"
                  value={symptoms.cp}
                  onChange={handleInputChange}
                  required
                />
                <label className="flex items-center justify-between" htmlFor="trestbps">
                Resting Blood Pressure
                <Tooltip info={<ul className="space-y-1">
                <li> Resting blood pressure (in mm Hg on admission to the hospital) </li></ul>}/>
                </label>
                <input
                  type="number"
                  name="trestbps"
                  placeholder="Answer"
                  value={symptoms.trestbps}
                  onChange={handleInputChange}
                  required
                />
                <label className="flex items-center justify-between" htmlFor="chol">
                Serum Cholesterol (in mg/dl)
                <Tooltip info={<ul className="space-y-1">
                <li> Serum Cholestoral in mg/dl </li></ul>}/>
                </label>
                <input
                  type="number"
                  name="chol"
                  placeholder="Answer"
                  value={symptoms.chol}
                  onChange={handleInputChange}
                  required
                />
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
                  <label className="flex items-center justify-between" htmlFor="fbs">
                  Fasting Blood Sugar
                    <Tooltip info={<ul className="space-y-1">
                    <li> 1 = True </li>
                    <li> 0 = False </li>
                    </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="fbs"
                    placeholder="Answer"
                    value={symptoms.fbs}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="flex items-center justify-between" htmlFor="restecg">
                  Resting Electrocardiographic Results
                  <Tooltip info={<ul className="space-y-1">
                    <li> 0: Normal </li>
                    <li> 1: Having ST-T wave abnormality</li>
                    <li> 2: Showing probable or definite left ventricular hypertrophy by Estes' criteria </li>
                    </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="restecg"
                    placeholder="Answer"
                    value={symptoms.restecg}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="flex items-center justify-between" htmlFor="thalach">
                  Maximum Heart Rate Achieved
                  <Tooltip info={<ul className="space-y-1">
                    <li> Maximum heart rate achieved </li> </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="thalach"
                    placeholder="Answer"
                    value={symptoms.thalach}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="flex items-center justify-between" htmlFor="exang">
                    Exercise Induced Angina.
                    <Tooltip info={<ul className="space-y-1">
                    <li> 1 for Yes; </li> 
                    <li> 0 for No; </li> 
                    </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="exang"
                    placeholder="Answer"
                    value={symptoms.exang}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="flex items-center justify-between" htmlFor="oldpeak">
                  ST Depression Induced by Exercise Relative to Rest
                  <Tooltip info={<ul className="space-y-1">
                  <li> ST Depression induced by exercise relative to rest </li> </ul>}/>
                </label>
                  <input
                    type="number"
                    name="oldpeak"
                    placeholder="Answer"
                    value={symptoms.oldpeak}
                    onChange={handleInputChange}
                    required
                  />
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
                className="h-100 d-flex flex-column overflow-y-auto items-center justify-center"
              >
                <h2>Final Round</h2>
                <div className="d-flex gap-2">
                  <label className="flex items-center justify-between" htmlFor="slope">
                  Slope of the Peak Exercise ST Segment
                  <Tooltip info={<ul className="space-y-1">
                    <li> 0: upsloping; </li> 
                    <li> 1: flat; </li> 
                    <li> 2: downsloping; </li> 
                    </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="slope"
                    placeholder="Answer"
                    value={symptoms.slope}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="flex items-center justify-between" htmlFor="ca">
                  Number of Major Vessels (0-3) Colored by Flourosopy
                  <Tooltip info={<ul className="space-y-1">
                    <li> Number of major vessels (0-3) colored by flourosopy</li> 
                    </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="ca"
                    placeholder="Answer"
                    value={symptoms.ca}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="flex items-center justify-between" htmlFor="thal">
                  Thalassemia (3 for normal; 6 for fixed defect; 7 for reversible defect)
                  <Tooltip info={<ul className="space-y-1">
                    <li> 0 = error (in the original dataset 0 maps to NaN's); </li> 
                    <li> 1 = fixed defect; </li> 
                    <li> 2 = normal; </li> 
                    <li> 3 = reversable defect; </li> 
                    </ul>}/>
                  </label>
                  <input
                    type="number"
                    name="thal"
                    placeholder="Answer"
                    value={symptoms.thal}
                    onChange={handleInputChange}
                    required
                  />
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
