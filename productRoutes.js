const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/productController'); // Correct import

// POST route for adding a product
router.post('/', addProduct);

module.exports = router;  // Export the router
