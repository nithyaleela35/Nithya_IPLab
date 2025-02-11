import React from "react";
import { Link } from "react-router-dom";
import "../css/SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Lets Register Account</h2>
        <p>Hello user, you have a great journey ahead!</p>
        
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="tel" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        
        <button className="signin-btn">Sign in</button>
        
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
