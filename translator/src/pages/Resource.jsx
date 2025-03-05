import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/resource.css";
import { FaTh, FaTrash, FaTimes } from "react-icons/fa";

const Resource = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="resource-container">
      {/* Sidebar */}
      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        style={{ backgroundColor: sidebarOpen ? "#FF5722" : "#fff" }}
      >
        <button
          className="close-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaTimes />
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Contact</li>
            <li className="active">Resources</li>
            <li>Documents</li>
            <li>Profile</li>
            <li>Sign out</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="top-bar">
          <button
            className="grid-icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaTh />
          </button>
          <div className="actions">
            <select className="sort-dropdown">
              <option>Sort by Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <button className="view-sample">View Sample</button>
            {/* Redirect to Question page */}
            <button
              className="create-new"
              onClick={() => navigate("/question")}
            >
              + Create New
            </button>
          </div>
        </div>
        <h2>Previous Year Documents</h2>
        <div className="document-table">
          <table>
            <thead>
              <tr>
                <th>Name Of Document</th>
                <th>Date Of Completion</th>
                <th>Year</th>
                <th>Time Of Completion</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[2024, 2023, 2022, 2021].map((year, index) => (
                <tr key={index}>
                  <td>#{index + 1} Hauptvordruck ESt 1 A</td>
                  <td>{year === 2024 ? "25 December" : "26 December"}</td>
                  <td>{year}</td>
                  <td>{year === 2024 ? "6:05:32" : "10:30:54"}</td>
                  <td>
                    <FaTrash className="delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Resource;
