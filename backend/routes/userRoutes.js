const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the User schema directly here
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password for login
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Create the User model
const User = mongoose.model('User', userSchema);

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  try {
    const { username, lastName, phone, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user and save it
    const newUser = new User({ username, lastName, phone, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user' });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, 'yourJWTSecret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in' });
  }
});

module.exports = router;
