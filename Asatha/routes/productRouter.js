// Requires and Imports
const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.get_productInfo);
productRouter.get('/BestSellers', productController.get_BestSellers);
productRouter.get(
  '/UnderratedProducts',
  productController.get_UnderratedProducts
);
productRouter.get('/RecentPurchases', productController.get_RecentPurchases);

module.exports = productRouter;
