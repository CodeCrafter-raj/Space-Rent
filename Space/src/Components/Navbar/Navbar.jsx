import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleSignInClick = () => {
    navigate('/auth/login');
  };

  // Function to check if we're inside the admin section
  const isAdminPage = location.pathname.includes('/admin');

  return !isAdminPage ? (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" className="company-logo" />
      </div>

      {/* Menu Items */}
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/shop/facilities') ? 'active' : ''}>
          <Link to="/shop/facilities">Facilities</Link>
        </li>
        <li className={isActive('/shop/listing') ? 'active' : ''}>
          <Link to="/shop/listing">Products</Link>
        </li>
        <li className={isActive('/contactus') ? 'active' : ''}>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li className={isActive('/faq') ? 'active' : ''}>
          <Link to="/faq">FAQ's</Link>
        </li>
        <li>
          <button className="sign-in-button" onClick={handleSignInClick}>
            Sign In
          </button>
        </li>
      </ul>

      {/* Hamburger Menu Icon */}
      <div
        className="hamburger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-icon">{menuOpen ? '✖' : '☰'}</span>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
