// shoppyglobe-backend/routes/cartRoutes.js

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cartController = require("../controllers/cartController");

// Add a product to the cart (protected route)
router.post("/add", authMiddleware, cartController.addToCart);

module.exports = router;
