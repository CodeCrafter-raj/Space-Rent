import React from "react";
import './ContactUs.css';
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Centered Heading */}
      {/* <div className="heading-container">
        <h1>Contact Us</h1>
      </div> */}

      {/* Left Side: Contact Form */}
      <div className="contact-form-container">
        <p>We'd love to hear from you!</p>
        <form className="contact-form">
          {/* Form Fields */}
          <div className="form-row">
            <input type="text" className="form-input" placeholder="Your Name" />
            <input type="email" className="form-input" placeholder="Your Email" />
          </div>
          <div className="form-row">
            <input type="text" className="form-input" placeholder="Subject" />
          </div>
          <div className="form-row ">
            <textarea className="form-textarea" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </div>

      {/* Right Side: Business Hours */}
      <div className="business-hours-container">
        <div className="business-hours">
          <h3><FaClock className="icon" /> Business Hours</h3>
          <div className="hours-info">
            <p><FaCalendarAlt className="icon" /> Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p><FaCalendarAlt className="icon" /> Saturday: 10:00 AM - 4:00 PM</p>
            <p><FaCalendarAlt className="icon" /> Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
