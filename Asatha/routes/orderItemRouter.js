// Requires and Imports
const express = require('express');
const orderItemRouter = express.Router();
const orderItemController = require('../controllers/orderItemController');

orderItemRouter.get('/', orderItemController.get_orderItemInfo);

module.exports = orderItemRouter;
