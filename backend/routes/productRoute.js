const express = require("express");

const { getAllProducts } = require("../controllers/productController"); // Import the controller function

const router = express.Router();

router.route("/products").get(getAllProducts);

module.exports = router
