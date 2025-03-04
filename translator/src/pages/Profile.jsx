import React from "react";
import { Link } from "react-router-dom";
import "../css/profile.css";
import logo from "../assets/logo.png"; // Logo from assets
import profilePic from "../assets/person.png"; // Profile picture from assets

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile" className="active">Profile</Link>
        </nav>
      </header>

      {/* Profile Section */}
      <div className="profile-content">
        <h2>Welcome, Alexa</h2>
        <div className="profile-card">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h3>Alexa Rawles</h3>
            <p>alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="profile-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Gender" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Marital Status" />
            <input type="text" placeholder="Spouse Name (if applicable)" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="No. of children (if applicable)" />
            <input type="text" placeholder="Address" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Passport number" />
            <input type="text" placeholder="Name of the working company" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Email address" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Agent name" />
            <input type="text" placeholder="Agent phone number" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Agent email address" />
            <input type="text" placeholder="Date of birth" />
          </div>
        </div>

        {/* Profile Actions */}
        <div className="profile-actions">
          <button className="btn red">Change Password</button>
          <button className="btn red">Delete Account</button>
        </div>

        {/* Footer Buttons */}
        <div className="form-footer">
          <button className="btn orange">German Tax Return</button>
          <button className="btn orange">Lohnsteuerbescheinigung</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
