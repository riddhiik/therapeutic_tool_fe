import React, { useState } from "react";
import "./Questions.css";

const questions = [
  {
    question: "What is VRJoy?",
    answer:
      "VRJoy is a pioneering platform that combines healthcare with Extended Reality (VR) technology. We provide immersive VR therapeutic applications designed specifically for children aged 6-11 years. Our solutions focus on mental health support, attention improvement, and cognitive development through engaging, interactive experiences."
  },
  {
    question: "What is Virtual Reality?",
    answer:
      "Virtual Reality (VR) is a computer-generated simulation that immerses users in a three-dimensional interactive environment. Using specialized headsets and controllers, VR creates an experience that can either replicate the real world or transport users to entirely new realms, engaging multiple senses for a truly immersive experience."
  },
  {
    question: "What is Virtual Reality therapy?",
    answer:
      "Virtual Reality therapy utilizes immersive VR environments as therapeutic tools to address various physical and mental health conditions. It provides safe, controlled, and engaging settings for therapeutic interventions, allowing children to practice skills, face challenges, and receive treatment in environments specifically designed for their needs and comfort."
  },
  {
    question: "Who is this for?",
    answer:
      "Our VR therapy solutions are specifically designed for children between 6-11 years of age. This includes children managing various challenges such as anxiety, ADHD, autism spectrum disorders, and those seeking cognitive or social skill development. Our age-appropriate content ensures both effectiveness and engagement for this specific demographic."
  },
  {
    question: "How is Virtual Reality therapy applied in healthcare?",
    answer:
      "In healthcare, VR therapy creates controlled environments where children can safely engage with therapeutic content. Applications include anxiety management through exposure therapy, attention training for ADHD, social skills development for autism spectrum disorders, pain distraction during medical procedures, and cognitive rehabilitation. Each application is customized to the child's specific needs and monitored by healthcare professionals."
  },
  {
    question: "Which conditions can be addressed through Virtual Reality therapy?",
    answer:
      "VR therapy can effectively address numerous conditions in children, including anxiety disorders, ADHD, autism spectrum disorders, specific phobias, social skills deficits, certain learning disabilities, mild depression, and can assist with pain management during medical procedures. Our platform offers specialized modules for each of these conditions with age-appropriate content and difficulty levels."
  },
  {
    question: "Is Virtual Reality therapy safe?",
    answer:
      "Yes, VR therapy is safe when properly administered under professional guidance. All our VR experiences are designed specifically for children with appropriate content, limited session durations, and comfortable headset configurations. We minimize potential side effects like motion sickness through careful design and gradually increasing exposure. Our therapists are trained to monitor children during sessions and can adjust parameters as needed."
  },
  {
    question: "How long are typical VR therapy sessions?",
    answer:
      "For children aged 6-11, our VR therapy sessions typically last between 15-30 minutes, depending on the child's age, condition, and comfort level. We carefully monitor each session and follow best practices for pediatric VR exposure, ensuring the experience remains beneficial without causing discomfort or fatigue."
  },
  {
    question: "What makes VRJoy different from other therapeutic approaches?",
    answer:
      "VRJoy stands apart through our exclusive focus on children aged 6-11, with all content and interfaces designed specifically for this age group. Our platform combines evidence-based therapeutic techniques with engaging, game-like experiences that maintain children's interest and motivation. We work closely with pediatric specialists to ensure our solutions are developmentally appropriate and clinically effective."
  }
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section">
      <div className="questions-container">
        <h2 className="questions-heading">Questions?</h2>
        <div className="questions-list">
          {questions.map((item, index) => (
            <div
              className={`question-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="question-title"
                onClick={() => toggleAnswer(index)}
              >
                <h3>{item.question}</h3>
                <span className="arrow-icon">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="question-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;