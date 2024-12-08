require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");

const cors = require('cors');

// Initialize the app
const app = express();

// Use CORS middleware
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use("/api/products", productRoutes); // Product routes
app.use("/api/auth", authRoutes); // Auth routes
app.use("/api/cart", cartRoutes); // Cart routes

// Catch-all route for serving the index.html file (frontend)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
