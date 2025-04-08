import React from 'react';
import './About.css';
import AboutImage from './Aboutus.jpg'; // Your existing image path

const About = () => {
  const benefits = [
    { title: "Engaging Experience", description: "Immersive VR environments capture children's attention in ways traditional therapies cannot" },
    { title: "Personalized Approach", description: "Adaptive difficulty levels based on each child's unique needs and progress" },
    { title: "Real-time Feedback", description: "Immediate rewards and guidance to reinforce positive behaviors" },
    { title: "Data-Driven Progress", description: "Comprehensive tracking tools for parents and clinicians to monitor improvement" }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={AboutImage} alt="Children enjoying VR therapy" />
        </div>
        <div className="about-content">
          <h2>About Our Vision</h2>
          <p className="about-intro">
            At VRJoy, we're revolutionizing ADHD therapy through the power of virtual reality,
            creating playful, effective solutions for children aged 6-11.
          </p>
          
          <p>
            Attention-Deficit/Hyperactivity Disorder affects millions of children worldwide, presenting 
            challenges that traditional treatments don't always fully address. Our innovative approach 
            leverages virtual reality technology to create therapeutic experiences that children 
            actually look forward to.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mission-statement">
            <h3>Our Promise</h3>
            <p>
              We're committed to developing evidence-based VR interventions that complement existing 
              treatments, empowering children with ADHD to build focus, self-regulation, and confidence
              in a safe, supportive virtual environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
