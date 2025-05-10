import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaLaptop, FaWifi, FaCar } from 'react-icons/fa';
import { FaBolt,  } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { FaTv, FaChair, FaDoorClosed } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        {/* About Us */}
        <div className="footer-contact">
          <h3>About Us</h3>
          <p>Our company is committed to deliver the best coworking spaces with modern amenities and a collaborative environment.</p>
        </div>
        {/* Get In Touch */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <h5><FaEnvelope /> info@company.com</h5>
          <h5><FaPhone /> +1-234-567-890</h5>
          <h5><FaMapMarkerAlt /> 123 Main Street, City, Country</h5>
          <div className="social-icons">
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://youtube.com"><FaYoutube /></a>
          </div>
        </div>

        {/* Products */}
        <div className="footer-contact">
          <h3>Products</h3>
          <div className="item"><FaChair className="item-icon" /> Dedicated Desk</div>
          <div className="item"><MdMeetingRoom className="item-icon" /> Private Cabin</div>
          <div className="item"><FaLaptop className="item-icon" /> Virtual Office</div>
          <div className="item"><FaTv className="item-icon" /> Conference Room</div>
        </div>
        {/* Facilities */}
        <div className="footer-contact">
          <h3>Facilities</h3>
          <div className="item"><FaCar className="item-icon" /> Parking Area</div>
          <div className="item"><FaWifi className="item-icon" /> Fast Wifi</div>
          <div className="item"><FaBolt className="item-icon" /> 24x7 Power Backup</div>
          <div className="item"><MdSecurity className="item-icon" /> 24x7 Security</div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="footer-bottom">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <h6>&copy; {new Date().getFullYear()} MyaFuture. All rights reserved.</h6>
      </div>
    </footer>
  );
};

export default Footer;
