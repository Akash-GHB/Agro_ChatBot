import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// 🔑 Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// 📌 Signup
export const signUp = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // ✅ Create user and save (triggers pre-save hashing)
    user = new User({ email, username, password });
    await user.save();

    // Generate token
    const token = generateToken(user._id);
    res.status(201).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📌 Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("s-1");
    // ✅ Use schema method to check password
    const isMatch = await user.matchPassword(password);
    console.log("s-2");
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.status(200).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
