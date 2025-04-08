/*
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import RegistrationForm from './RegistrationForm';
import SignIn from './SignIn';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
       
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>

        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;

*/
/*

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VRImage from './virtual-reality.jpg';
import About from './About';
import WhatWeOffer from './WhatWeOffer';
import Questions from './Questions';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './RegisterForm';
import Assessment from './Assessment';





function App() {
  
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <h1>VRJoy</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/" onClick={() => handleScroll('home')}>Home</Link></li>
              <li><Link to="/" onClick={() => handleScroll('about')}>About Us</Link></li>
              <li><Link to="/" onClick={() => handleScroll('offer')}>What We Offer</Link></li>
              <li><Link to="/" onClick={() => handleScroll('contact')}>Contact</Link></li>
              <li><Link to="/assessment">Assessment</Link></li>
              <li><Link to="/login">Login</Link></li>
              
              
            </ul>
          </nav>
        </header>

        
        <Routes>
          
          <Route
            path="/"
            element={
              <div>
                <Home />
                <div id="about"><About /></div>
                <div id="offer"><WhatWeOffer /></div>
                <div id="questions"><Questions /></div>
                <div id="contact"><ContactUs /></div>
              </div>
            }
          />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </div>
    </Router>

    
  );
}


function Home() {
  return (
    <div id="home" className="main-content">
      <div className="text-content">
        <h2>The Virtual Reality therapy platform for ADHD children care</h2>
        <p>
          With the power of virtual reality, VRJoy provides effective solutions and therapy for children,
          revolutionizing the way therapy is delivered and experienced.
        </p>
        <button className="register-button"><li><Link to="/register">Register</Link></li></button>
      </div>
      <div className="image-content">
        <img src={VRImage} alt="Virtual Reality Therapy" />
      </div>
    </div>
  );
}

export default App;
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { BsHeadsetVr } from "react-icons/bs";
import "./App.css";
import VRImage from './homephotos.png';
import backgroundVideo from './background.mp4';

import Dashboard from './components/Dashboard/Dashboard';
import About from "./About";
import WhatWeOffer from "./WhatWeOffer";
import Questions from "./Questions";
import ContactUs from "./ContactUs";
import Login from "./SignIn";
import RegistrationForm from "./RegisterForm";
import Assessment from "./Assessment";

// Home Component
function Home() {
  return (
    <div id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1 className="main-heading">The Virtual Reality Therapy Platform for ADHD Children</h1>
          <p className="sub-text">
            With the power of virtual reality, VRJoy provides effective solutions and therapy for children,
            revolutionizing the way therapy is delivered and experienced.
          </p>
          <Link to="/register" className="register-button">
            Get Started
          </Link>
        </div>
        
        <div className="image-content">
          <img src={VRImage} alt="Virtual Reality Therapy" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
}

// Main App Component
function AppContent() {
  const location = useLocation();

  const showNavbar = location.pathname === "/";

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Show Navbar only on homepage */}
      {showNavbar && (
        <header className="header">
          <div className="logo">
            <BsHeadsetVr className="vr-icon" />
            <h2>VRJoy</h2>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/" onClick={() => handleScroll("home")}>Home</Link></li>
              <li><Link to="/" onClick={() => handleScroll("about")}>About Us</Link></li>
              <li><Link to="/" onClick={() => handleScroll("offer")}>What We Offer</Link></li>
              <li><Link to="/" onClick={() => handleScroll("contact")}>Contact</Link></li>
              <li><Link to="/assessment">Assessment</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="page-content">
              <Home />
              <div id="about"><About /></div>
              <div id="offer"><WhatWeOffer /></div>
              <div id="questions"><Questions /></div>
              <div id="contact"><ContactUs /></div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
