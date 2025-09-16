import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routers/auth.routes.js'; // Correct path to your router file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parses JSON request bodies
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully ✅');
  } catch (error) {
    console.error('MongoDB connection failed ❌:', error.message);
    process.exit(1);
  }
};

connectDB();

// API Routes
app.use('/api/auth', authRoutes);

// Simple root route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});