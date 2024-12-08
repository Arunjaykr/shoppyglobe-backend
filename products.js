const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  stock: {
    type: Number,
    required: [true, "Stock is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
