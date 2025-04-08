import React, { useState } from "react";
import "./Assessment.css";

const questions = [
  {
    id: 1,
    question: "Does your child often fidget with hands or feet or squirm in their seat?",
    options: ["Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    id: 2,
    question: "Does your child have difficulty remaining seated when required?",
    options: ["Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    id: 3,
    question: "Does your child often get easily distracted by external stimuli?",
    options: ["Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    id: 4,
    question: "Does your child struggle to follow through on instructions or complete tasks?",
    options: ["Rarely", "Sometimes", "Often", "Very Often"],
  },
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
    }
  };

  const restartAssessment = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setSubmitted(false);
  };

  return (
    <div className="assessment-container">
      <h2 className="assessment-title">ADHD Assessment</h2>
      {!submitted ? (
        <div className="question-card">
          <div className="question-progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h3 className="question-text">{questions[currentQuestion].question}</h3>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-card">
          <h3>Thank you for completing the assessment!</h3>
          <p>Your responses have been recorded.</p>
          <button className="restart-button" onClick={restartAssessment}>
            Retake Assessment
          </button>
        </div>
      )}
    </div>
  );
};

export default Assessment;
