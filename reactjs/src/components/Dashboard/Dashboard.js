import React from "react";
import { BsHeadsetVr } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <BsHeadsetVr className="vr-icon" />
          <h2>VRJoy</h2>
        </div>
        <nav className="nav-links">
          <button>Dashboard</button>
          <button>Assessment Centre</button>
          <button>Assessment Result</button>
          <button>Therapy Planner</button>
          <button>Games Section</button>
          <button>Progress Report</button>
        </nav>
      </aside>
      <main className="main-section">
        <header className="dashboard-header">
          <div className="greeting">
            <h1>Hello, Kiddo!</h1>
            <p>Welcome to your VRJoy world</p>
          </div>
          <div className="profile-avatar">
            <FaUserCircle size={48} />
          </div>
        </header>
        <section className="activity-section">
          <h3>Your VR Activities</h3>
          <div className="activity-gallery">
            <img src="/images/vr-game1.png" alt="VR Game 1" />
            <img src="/images/vr-game2.png" alt="VR Game 2" />
            <img src="/images/meditation1.png" alt="Meditation Zone" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
