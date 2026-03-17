
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const contactRoutes = require("./routes/contactRoutes");

const connectDB = require("./config/db");
connectDB();

const transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
 user: process.env.EMAIL_USER,
 pass: process.env.EMAIL_PASS
 }
});

const app = express();

// Verify email transporter
transporter.verify((error, success) => {
 if (error) {
 console.log("Email transporter error:", error);
 } else {
 console.log("Email transporter is ready");
 }
});

// Middleware
app.use(cors({
 origin: [
 "http://localhost:3000",
 "https://gayatriraghuwanshi.vercel.app"
 ]
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
 res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
 console.log(Server running on http://localhost:${PORT});
});

// React frontend
// ↓
// POST request to http://localhost:5000/contact
// ↓
// Express receives request
// ↓
// express.json() parses body
// ↓
// Your route extracts data
// ↓
// console.log prints it
// ↓
// res.json sends response
// ↓
// Frontend receives response

// 🧠 What You Have Built Technically

// You built:

// ✔ A REST API
// ✔ A POST endpoint
// ✔ Middleware handling
// ✔ JSON parsing
// ✔ CORS handling
// ✔ Request → Response cycle

// This is real backend foundation 🔥

// 🎓 Backend Concepts You Just Used

// Node.js runtime

// Express framework

// Middleware

// REST routing

// HTTP methods

// Status codes

// JSON API

// Server listening

// Package Purpose
// mongoose Connect to MongoDB
// dotenv Manage environment variables
// nodemailer Send email
// express-validator Validate form data
// helmet Add security headers
// express-rate-limit Prevent spam

// FLOW OF CORS

// Frontend sends request
// ↓
// Browser checks origin
// ↓
// Server sends CORS headers
// ↓
// Browser allows or blocks request

// GAYATRIIII

// THIS is what a successful backend test looks like 👏👏👏

// ✅ What Just Happened (Very Important)

// You just completed a full backend email API flow:

// 1️⃣ Postman sent request
// POST http://localhost:5000/contact

// 2️⃣ Express received it

// Your /contact route executed.

// 3️⃣ Validation passed

// All fields were present.

// 4️⃣ Nodemailer sent email

// Using:

// transporter.sendMail()

// 5️⃣ Backend responded
// {
// "success": true,
// "message": "Email sent successfully!"
// }

// 6️⃣ Status Code = 200 ✅

// That green 200 means:

// ✔ Request successful
// ✔ Server worked
// ✔ No errors

// ✅ Working Express server
// ✅ REST API route
// ✅ JSON body handling
// ✅ CORS configured
// ✅ Environment variables
// ✅ Gmail App Password integration
// ✅ Nodemailer working
// ✅ Postman API testing skill

// Frontend → Express → Nodemailer → Gmail → You.

// If you ever want to:(things if u want to add in future)

// • Deploy backend publicly
// • Add MongoDB storage
// • Add rate limiting (spam protection)
// • Add animations
// • Deploy full stack properly
// • Or level up backend structure

// You now understand:

// Models → Data structure

// Controllers → Business logic

// Routes → API endpoints

// Server → Configuration layer

// That’s real backend thinking.