import React, { useState } from "react";
import { BsHeadsetVr } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, Outlet } from "react-router-dom";
import "./Dashboard.css";


import avatar from "./avatar.jpg"; // Make sure this exists or replace with a link

const Dashboard = ({ childName = "Kiddo", onLogout }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  if (showProfile) {
    return (
      <div className="profile-container" style={{ padding: "2rem", textAlign: "center" }}>
        <h1>👦 Welcome, {childName}!</h1>
        <img
          src={avatar}
          alt="Avatar"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginTop: "1rem",
          }}
        />
        <div style={{ marginTop: "2rem" }}>
          <button onClick={() => setShowProfile(false)} style={{ marginRight: "1rem" }}>
            🔙 Back to Dashboard
          </button>
          <button onClick={onLogout}>🚪 Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <BsHeadsetVr className="vr-icon" />
          <h2>VRJoy</h2>
        </div>
        <nav className="nav-links">
          <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
          <button onClick={() => navigate("/dashboard/assessment")}>📝 Assessment Centre</button>
          <button onClick={() => navigate("/dashboard/assessment-result")}>📊 Assessment Result</button>
          <button onClick={() => navigate("/dashboard/therapy")}>🧘 Therapy Planner</button>
          <button onClick={() => navigate("/dashboard/games")}>🎮 Games Section</button>
          <button onClick={() => navigate("/dashboard/progress")}>📈 Progress Report</button>
        </nav>
      </aside>
      <main className="main-section">
        <header className="dashboard-header">
          <div className="greeting">
            <h1>👋 Hello, {childName}!</h1>
            <p>Welcome to your VRJoy world🎉</p>
          </div>
          <div
            className="profile-avatar"
            onClick={() => setShowProfile(true)}
            style={{ cursor: "pointer" }}
          >
            <FaUserCircle size={48} />
          </div>
        </header>

        {/* 🔁 This will load nested components like DashboardHome, Assessment, etc. */}
        <section className="activity-section">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
