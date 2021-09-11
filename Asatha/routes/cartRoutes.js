// Requires and Imports
const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

// for cart
cartRouter.get('/', cartController.view_cart);

//exporting the router
module.exports = (cartRouter);