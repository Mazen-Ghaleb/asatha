// Requires and Imports
const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

// for product review
productRouter.get('/', productController.view_product);

//exporting the router
module.exports = (productRouter);