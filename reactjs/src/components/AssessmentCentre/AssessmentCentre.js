import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AssessmentCentre.css";

const AssessmentCentre = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  return (
    <div className="assessment-container">
      {!started ? (
        <div className="welcome-section">
          <h2>📝 Assessment Centre</h2>
          <p className="intro-text">Let’s start with how do you know your child?</p>
          <button className="start-btn" onClick={() => setStarted(true)}>
            🚀 Start Assessment
          </button>
        </div>
      ) : (
        <div className="questions-section">
          <h2>✨ Let’s Begin!</h2>

          <div className="question-box">
            <h3>📌 Question 1:</h3>
            <p>Does your child find it hard to focus during games or school?</p>
            <div className="options">
              <button>🟢 Yes</button>
              <button>🟡 Sometimes</button>
              <button>🔴 No</button>
            </div>
          </div>

          <div className="question-box">
            <h3>📌 Question 2:</h3>
            <p>Does your child forget daily tasks or lose things often?</p>
            <div className="options">
              <button>🟢 Yes</button>
              <button>🟡 Sometimes</button>
              <button>🔴 No</button>
            </div>
          </div>

          <button className="submit-btn">🎯 Submit Assessment</button>
          <button onClick={() => navigate("/assessment")}>📝 Assessment Centre</button>
        </div>
      )}
    </div>
  );
};

export default AssessmentCentre;
