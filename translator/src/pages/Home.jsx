import React from "react";
//import Navbar from "./components/Navbar.jsx";
//import Footer from "./components/Footer.jsx";
import "./css/home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Translation Tailored for You</h1>
          <p>Accurate and Professional Language Solutions</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get a Quote</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Success and Stats Section */}
      <section className="stats">
        <div className="stat-box">
          <h2>15 years and counting of success.</h2>
          <p>Trusted by top organizations worldwide.</p>
        </div>
        <div className="stat-box">
          <h2>99.25%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What we offer</h2>
        <div className="services-list">
          <div className="service-item">Legal Translation</div>
          <div className="service-item">Business & Marketing</div>
          <div className="service-item">Multilingual Documentation</div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2>Our 8 Years of Achievements</h2>
        <p>We have helped thousands of clients in multiple industries.</p>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>Translation Process</h2>
        <div className="process-steps">
          <div className="step">1. Analysis</div>
          <div className="step">2. Proofreading</div>
          <div className="step">3. Final Review</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Selected Testimonials by Clients</h2>
        <p>"Best translation service ever! Highly professional and accurate."</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Connect with Us</h2>
        <p>Follow us on social media.</p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
