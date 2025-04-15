// AssessmentResult.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AssessmentResult.css"; // we'll create this

const AssessmentResult = () => {
  const navigate = useNavigate();
  const score = localStorage.getItem("assessmentScore");

  // Generate formatted date and time
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
  const formattedTime = date.toLocaleTimeString("en-US");

  return (
    <div className="assessment-result-container">
      <div className="result-card">
        <h2>📊 Assessment Result</h2>
        <p className="date-time">🗓️ {formattedDate} | 🕒 {formattedTime}</p>
        <p>Your child's score is:</p>
        <h1 className="score-display">{score}/100</h1>

        <button className="back-dashboard-btn" onClick={() => navigate("/dashboard")}>
          🏠 Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AssessmentResult;


