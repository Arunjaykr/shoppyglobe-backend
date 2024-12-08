const Product = require('../models/product'); // Import the Product model

// Function to add a new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body; // Get data from the request body
    const newProduct = new Product({ name, description, price, stock }); // Create new product object

    const savedProduct = await newProduct.save(); // Save the product in the database
    res.status(201).json({
      message: "Product added successfully!",
      product: savedProduct,
    });
  } catch (error) {
    console.error(error); // Log any error
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
};

module.exports = { addProduct }; // Export the function to be used in routes
