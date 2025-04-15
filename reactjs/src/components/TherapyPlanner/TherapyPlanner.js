import React from "react";
import "./TherapyPlanner.css";

const TherapyPlanner = () => {
  return (
    <div className="therapy-container">
      <h2 className="therapy-heading">🧠 Therapy Planner</h2>

      <section className="score-distribution">
        <h3 className="section-title">ADHD Score Distribution (Out of 40)</h3>
        <p>Based on your child's assessment score, here is the interpretation:</p>
        <ul className="score-list">
          <li><strong>Below 10:</strong> No signs of ADHD detected.</li>
          <li><strong>Above 15:</strong> Mild ADHD symptoms, easily manageable with proper guidance and support.</li>
          <li><strong>Around 30:</strong> Moderate level ADHD observed (60–70%). Requires consistent therapy and behavioral intervention.</li>
          <li><strong>Above 45:</strong> High level ADHD symptoms (90–95%). Requires intensive therapy, structured environment, and parental support.</li>
        </ul>
      </section>

      <section className="issues-identified">
        <h3 className="section-title">🎯 Common Issues Identified in Children</h3>
        <p>Children affected by ADHD commonly experience one or more of the following:</p>
        <ul className="issue-list">
          <li>⚠️ <strong>Inattention</strong> – Difficulty in sustaining focus, especially in tasks or play.</li>
          <li>⚡ <strong>Impulsivity</strong> – Acting without thinking, frequent interruptions.</li>
          <li>🏃 <strong>Hyperactivity</strong> – Excessive movement, difficulty staying still or quiet.</li>
          <li>🧩 <strong>Cognitive and Motor Skills Challenges</strong> – Problems with planning, coordination, and memory.</li>
        </ul>
      </section>

      <section className="therapy-games">
        <h3 className="section-title">🕹️ Recommended Therapy Games</h3>
        <p>To address these challenges, we recommend the following therapy games designed specifically for children with ADHD:</p>
        <div className="game-cards">
          <div className="game-card">
            <h4>🛒 Super Market</h4>
            <p>Enhances <strong>Attention</strong> and task sequencing skills.</p>
          </div>
          <div className="game-card">
            <h4>🎣 Fishing Game</h4>
            <p>Improves <strong>Cognitive Abilities</strong> and <strong>Hand-Eye Coordination</strong>.</p>
          </div>
          <div className="game-card">
            <h4>🫧 Bubble Game</h4>
            <p>Helps reduce <strong>Impulsiveness</strong> and improves self-control.</p>
          </div>
          <div className="game-card meditation-zone">
            <h4>🧘 Cool Down Zones</h4>
            <p>Calming space for <strong>mindfulness</strong>, emotional regulation and hyperactivity relief.</p>
          </div>
        </div>
      </section>

      <section className="personalized-plan">
        <h3 className="section-title">📌 Personalized Therapy Planning</h3>
        <p>
          Children with multiple ADHD traits (e.g., impulsivity + inattention or hyperactivity + attention) will be given a personalized mix of games and activities. The VRJoy system intelligently recommends a combination of therapy tools based on the assessment report and observed behavior.
        </p>
        <p><strong>Meditation & Mindfulness</strong> are also recommended in loops for all categories as a universal calming technique and emotional stabilizer.</p>
      </section>
    </div>
  );
};

export default TherapyPlanner;
