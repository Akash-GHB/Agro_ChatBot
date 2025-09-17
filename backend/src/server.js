import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routers/auth.routes.js'; // Correct path to your router file
import multer from 'multer';
import fs from 'fs';         // built-in
import axios from 'axios';
import FormData from 'form-data';
import serviceRoutes from './routers/service.routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parses JSON request bodies
const corsOptions = {
  origin: 'http://localhost:3000', // Change this to your frontend's URL
  credentials: true, // This is crucial for allowing cookies
};
app.use(cors(corsOptions));
//   Connect to MongoDB  
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
app.use('/api/service', serviceRoutes);
// // -------------------- VOICE OUTPUT (TTS) -------------------- //

// // helper: wait before retry
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// app.post('/api/tts', async (req, res) => {
//   try {
//     const { text } = req.body;
//     if (!text) return res.status(400).json({ error: "text required" });

//     let retries = 3;
//     let resp;

//     while (retries > 0) {
//       try {
//         resp = await axios.post(
//           "https://api.openai.com/v1/audio/speech",
//           {
//             model: "gpt-4o-mini-tts",
//             voice: "alloy", // Tamil capable
//             input: text
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//               "Content-Type": "application/json"
//             },
//             responseType: "arraybuffer"
//           }
//         );
//         break; // ✅ success, break out of loop
//       } catch (err) {
//         if (err.response?.status === 429) {
//           console.warn("Rate limited. Retrying in 2s...");
//           retries--;
//           await sleep(2000); // wait before retry
//         } else {
//           throw err; // not a rate limit error, stop
//         }
//       }
//     }

//     if (!resp) {
//       return res.status(429).json({ error: "Too many requests, please try again later." });
//     }

//     res.setHeader("Content-Type", "audio/mpeg");
//     res.send(resp.data);

//   } catch (err) {
//     console.error("TTS error:", err?.response?.data || err.message);
//     res.status(500).json({ error: "tts failed", details: err?.response?.data || err.message });
//   }
// });

// Simple root route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});  