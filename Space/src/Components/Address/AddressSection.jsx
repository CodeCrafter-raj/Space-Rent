import React from "react";
import './Address.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AddressSection = () => {
  return (
    <div className="address-container">
      {/* <h1>Contact Us</h1>
      <p>We Got All You Need</p> */}
      {/* Contact Information Cards */}
      <div className="contact-cards">
        <div className="card contact-card">
          <FaMapMarkerAlt className="icon large-icon" />
          <p>123 Business Lane, Suite 456, Cityville, ST 78901</p>
        </div>
        <div className="card contact-card">
          <FaPhoneAlt className="icon large-icon" />
          <p>+1 234 567 890</p>
        </div>
        <div className="card contact-card">
          <FaEnvelope className="icon large-icon" />
          <p>info@yourbusiness.com</p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
