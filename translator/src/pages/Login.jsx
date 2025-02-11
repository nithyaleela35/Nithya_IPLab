import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Let's Sign You In</h2>
        <p className="login-subtitle">Welcome Back, You Have Been Missed</p>

        <form className="login-form">
          <input type="text" placeholder="Email, phone & username" />
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
            />
            <span 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>

          
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>

          <button type="submit" className="login-button">Sign In</button>
        </form>

        <div className="separator">or</div>

        <div className="social-login">
          <span className="google">G</span>
          <span className="facebook">F</span>
          <span className="apple"></span>
        </div>

        <p className="register-text">
          Don't have an account? <Link to="/signin" >Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
