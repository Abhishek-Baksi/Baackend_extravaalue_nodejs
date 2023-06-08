
const express = require("express");
const router = express.Router();
const Product = require("../models/productsModel");

// search Product route
router.get("/search-product", async (req, res) => {
  try {
    // Extract the value of the "search" property from the request body
    const search = req.body.search;

    // Split the search query into individual keywords
    const keywords = search.split(" ");

    // Construct an array of regex conditions for each keyword
    const regexConditions = keywords.map((keyword) => ({
      $or: [
        { brand: { $regex: keyword, $options: "i" } },
        { model: { $regex: keyword, $options: "i" } },
      ],
    }));

    // Combine the regex conditions using logical OR ($or)
    const query = { $or: regexConditions };

    // Use the constructed query to search for matching products
    const productData = await Product.find(query);

    if (productData.length > 0) {
      // If products are found, send a successful response with the product details
      res
        .status(200)
        .json({ success: true, message: "Product Details", data: productData });
    } else {
      // If no products are found, send an error response
      res.status(404).json({ success: false, message: "Products Not Found!" });
    }
  } catch (err) {
    console.log(err.message);
    // If an error occurs during the search, send an error response with the error message
    res.status(500).json({ message: err.message });
  }
});

// GET Product route
router.get("/used-product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// GET Product route with ID
router.get("/used-product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// POST Product route
router.post("/used-product", async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Update Product route with ID
router.put("/used-product/:id", async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Cannot find any product with ID" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Delete Product route with ID
router.delete("/used-product/:id", async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Cannot find any product with ID" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
