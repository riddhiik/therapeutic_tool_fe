import React from "react";
import { useNavigate } from "react-router-dom";
import "./AssessmentCentre.css"; // reuse styling

const AssessmentResult = () => {
  const navigate = useNavigate();
  const score = localStorage.getItem("assessmentScore");

  return (
    <div className="assessment-container">
      <h2>🎉 Assessment Completed</h2>
      <p>Your child's score is:</p>
      <h1 className="score-display">{score}</h1>

      <button className="start-btn" onClick={() => navigate("/dashboard")}>
        🏠 Go to Dashboard
      </button>
    </div>
  );
};

export default AssessmentResult;

