import React from 'react';
import './WhatWeOffer.css';
import GameSpaceImage from './Game.jpg'; // Your actual image path
import PuzzleAreaImage from './puzzles.jpg'; // Your actual image path
import CoolDownZonesImage from './Cool.jpg'; // Your actual image path

const WhatWeOffer = () => {
  const offerData = [
    {
      id: 1,
      title: "Games Space",
      image: GameSpaceImage,
      description: "VR games tailored for attention improvement, helping children with ADHD experience enhanced sustained focus and better ability to filter distractions, supporting cognitive growth and task prioritization.",
      features: ["Adaptive difficulty levels", "Reward-based progression", "Real-time focus tracking"]
    },
    {
      id: 2,
      title: "Puzzle Area",
      image: PuzzleAreaImage,
      description: "Interactive VR puzzles help children with ADHD develop stronger problem-solving skills, enhance sustained attention, and improve spatial reasoning abilities while making learning engaging and fun.",
      features: ["Spatial reasoning challenges", "Pattern recognition games", "Sequential thinking tasks"]
    },
    {
      id: 3,
      title: "Cool Down Zones",
      image: CoolDownZonesImage,
      description: "Soothing VR environments promote mental relaxation in children with ADHD by reducing stress, improving emotional regulation, and fostering a calm state through immersive experiences and guided mindfulness.",
      features: ["Guided breathing exercises", "Peaceful nature scenes", "Sensory calming activities"]
    }
  ];

  return (
    <section className="what-we-offer-section">
      <div className="offer-container">
        <div className="offer-header">
          <h2>What we offer</h2>
          <div className="header-underline"></div>
        </div>
        
        <p className="offer-intro">
          We offer an innovative suite of VR-based experiences designed to help children aged 6-11 
          manage ADHD effectively through engaging, therapeutic virtual reality activities.
        </p>
        
        <div className="offer-grid">
          {offerData.map((item) => (
            <div className="offer-item" key={item.id}>
              <div className="offer-image-container">
                <img src={item.image} alt={item.title} />
                <div className="image-overlay">
                  <span>Explore</span>
                </div>
              </div>
              
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <ul className="feature-list">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className="research-highlight">
          <h3>Evidence-Based Approach</h3>
          <p>
            Developed with insights from child psychology experts, our solutions are tailored to support 
            both therapeutic goals and enjoyable experiences, empowering children to thrive in a 
            supportive, interactive space backed by ongoing research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;