import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    agreePrivacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-text">
        <h1>
          Let's <span>Connect</span>!
        </h1>
        <p>
          Have a question about our VR adventures? Want to join the fun? Drop us a message and we'll get back to you faster than a rocket ship!
        </p>
        <div className="contact-info">
          <div className="info-item">
            <i className="info-icon email-icon"></i>
            <span>hello@vrfunkids.com</span>
          </div>
          <div className="info-item">
            <i className="info-icon phone-icon"></i>
            <span>+1 (888) VR-WORLD</span>
          </div>
        </div>
      </div>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <h2>Send us a <span>Message</span></h2>
        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Country*</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="input-group">
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              required
            >
              <option value="">How did you hear about us?*</option>
              <option value="Friend">From a Friend</option>
              <option value="School">School</option>
              <option value="Social">Social Media</option>
              <option value="Search">Search Engine</option>
              <option value="Event">At an Event</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group full-width">
            <textarea 
              name="message"
              placeholder="Your message*"
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="form-checkbox">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="agreePrivacy"
              checked={formData.agreePrivacy}
              onChange={handleInputChange}
              required
            />
            <span className="checkmark"></span>
            I have read and agree to the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Send Message <span className="rocket-icon">🚀</span>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;