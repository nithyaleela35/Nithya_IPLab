import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resource from "./pages/Resource";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
