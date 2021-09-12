// Requires and Imports
const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.get_productInfo);

module.exports = productRouter;
