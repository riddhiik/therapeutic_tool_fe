import React from "react";
import avatar from "./avatar.jpg"; // add any cute avatar image in this path

const Profile = ({ onLogout, onBackToDashboard }) => {
  const user = JSON.parse(localStorage.getItem("vrjoyUser"));

  return (
    <div className="profile-container">
      <h2>👋 Welcome, {user?.childName || "Child"}!</h2>
      <img src={avatar} alt="Avatar" className="avatar-img" />
      <button onClick={onBackToDashboard}>🏠 Back to Dashboard</button>
      <button onClick={onLogout}>🚪 Logout</button>
    </div>
  );
};

export default Profile;
