// Requires and Imports
const express = require('express');
const customerRouter = express.Router();
const customerController = require('../controllers/customerController');

customerRouter.get('/', customerController.get_customerInfo);

module.exports = customerRouter;
