import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Translator</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/getstarted">Get Started</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </nav>
  );
};

export default Navbar;
