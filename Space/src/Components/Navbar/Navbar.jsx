import React, { useState } from "react";
import "./Navbar.css"; // Keep navbar-specific styles here.

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">SpaceRent</div>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Product</li>
        <li>Facilities</li>
        <li>Contact Us</li>
      </ul>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
