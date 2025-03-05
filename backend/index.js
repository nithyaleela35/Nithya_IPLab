const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes"); // Only user-related routes
const cors = require("cors");

const app = express();
const port = 5000;

// MongoDB connection string directly in index.js
const mongoURI = "mongodb://localhost:27017/Iplab"; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(cors());

// User routes
app.use("/api/users", userRoutes); // User-specific routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
