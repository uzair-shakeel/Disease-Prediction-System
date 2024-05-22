// src/components/PredictionResult.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PredictionResult.css';

const HeartDiseaseResult = () => {
  const location = useLocation();
  const { prediction } = location.state;

  let message, styleClass, emoji;

  if (prediction.includes("not")) {
    emoji="😊"
    message = "Great news! The patient is predicted not to have heart disease.";
    styleClass = "no-disease";
  } else {
    emoji="😔"
    message = "Unfortunately, the patient is predicted to have heart disease.";
    styleClass = "has-disease";
  }

  return (
    <div className={`prediction-container ${styleClass}`}>
      <h1 className='text-black font-bold text-6xl pb-24'>Heart Disease Prediction Result</h1>
      <h2 className='text-8xl pb-6'>{emoji}</h2>
      <h2 className='font-bold text-4xl pb-16'>{message}</h2>
      <Link to="/prediction" className="back-link back-btn">Predict Again</Link>
    </div>
  );
};

export default HeartDiseaseResult;
