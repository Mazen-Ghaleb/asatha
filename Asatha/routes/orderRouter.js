// Requires and Imports
const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');

orderRouter.get('/', orderController.get_orderInfo);

module.exports = orderRouter;
