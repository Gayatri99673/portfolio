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
  console.log(`Server running on http://localhost:${PORT}`);
});


