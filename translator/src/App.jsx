import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/forgotpassword";

const App =() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path = "/login" element={<Login/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
