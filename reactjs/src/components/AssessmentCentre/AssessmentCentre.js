import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AssessmentCentre.css";

const AssessmentCentre = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false); // Check if the assessment is completed

  const fetchQuestions = () => {
    const mockQuestions = [
      { id: 1, question: "Does your child often make careless mistakes in schoolwork?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 2, question: "Does your child have difficulty staying focused on tasks?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 3, question: "Does your child seem to be easily distracted by extraneous stimuli?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 4, question: "Does your child avoid or dislike tasks that require sustained mental effort?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 5, question: "Does your child often forget daily activities?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 6, question: "Is your child frequently fidgeting or squirming?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 7, question: "Does your child often leave their seat in situations where remaining seated is expected?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 8, question: "Does your child talk excessively?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 9, question: "Does your child interrupt or intrude on others' conversations or games?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 10, question: "Does your child have difficulty waiting for their turn?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 11, question: "Does your child engage in risky or unsafe behaviors?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 12, question: "Does your child make impulsive decisions without thinking about consequences?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 13, question: "Does your child have difficulty organizing tasks and activities?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 14, question: "Does your child often lose things necessary for tasks?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 15, question: "Does your child fail to follow through on instructions or finish schoolwork?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 16, question: "Does your child seem to not listen when spoken to directly?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 17, question: "Does your child often fidget or play with their hands?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 18, question: "Does your child often struggle to stay quiet in situations where it is expected?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 19, question: "Does your child tend to act without thinking about the consequences?", options: ["Never", "Sometimes", "Often", "Frequently"] },
      { id: 20, question: "Does your child exhibit excessive talking, making it difficult for others to finish their thoughts?", options: ["Never", "Sometimes", "Often", "Frequently"] },
    ];
    setQuestions(mockQuestions);
  };

  const handleOptionClick = (questionId, selectedOption) => {
    const points = { Never: 1, Sometimes: 2, Often: 3, Frequently: 4 };

    // Update the answers and calculate score dynamically
    setAnswers({
      ...answers,
      [questionId]: { selectedOption, points: points[selectedOption] },
    });

    // Recalculate score dynamically as options are selected
    const newScore = Object.values(answers).reduce((total, answer) => total + answer.points, 0) + points[selectedOption];
    setScore(newScore);
  };

  const submitAssessment = () => {
    console.log("Assessment Submitted. Final Score: ", score);
    localStorage.setItem("assessmentScore", score); // Store score for results page
    navigate("/assessment-result"); // Navigate to results page
  };

  const startAssessment = () => {
    setStarted(true);
    fetchQuestions();
  };

  const currentQuestion = questions[currentIndex];
  const isSubmitEnabled = Object.keys(answers).length === 20;

  return (
    <div className="assessment-container">
      {!started ? (
        <div className="welcome-section">
          <h2>📝 Assessment Centre</h2>
          <p className="intro-text">Let’s start with how do you know your child?</p>
          <button className="start-btn" onClick={startAssessment}>
            🚀 Start Assessment
          </button>
        </div>
      ) : questions.length > 0 && currentQuestion ? (
        <div className="questions-section">
          <h2>✨ Let’s Begin!</h2>
          <div className="question-box">
            <h3>📌 Question {currentIndex + 1}:</h3>
            <p>{currentQuestion.question}</p>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(currentQuestion.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {currentIndex < questions.length - 1 && (
            <button
              className="next-btn"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              ➡️ Next
            </button>
          )}
          {currentIndex === questions.length - 1 && (
            <button
              className={`submit-btn ${isSubmitEnabled ? "active" : ""}`}
              onClick={submitAssessment}
              disabled={!isSubmitEnabled}
            >
              🎯 Submit Assessment
            </button>
          )}
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default AssessmentCentre;
