// src/SignIn.js
/*
import React, { useState } from 'react';
import './SignIn.css'
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data Submitted:', formData);
    // Add sign-in logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Sign In</h2>
      <div className="section">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit" className="button">Sign In</button>
    </form>
  );
};

export default SignIn;
*/

import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="logo-container">
          <div className="logo-circle">
            <span>VR</span>
          </div>
        </div>
        <h2>Welcome Back!</h2>
        <p className="signin-intro">Enter your details to continue your VR adventure</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="forgot-password">
            <a href="#forgot">Forgot password?</a>
          </div>
          
          <button type="submit" className="signin-button">Sign In</button>
          
          <div className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </div>
        </form>
      </div>
      <div className="stars-container">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default SignIn;