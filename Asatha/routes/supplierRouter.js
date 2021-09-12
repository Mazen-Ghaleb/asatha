// Requires and Imports
const express = require('express');
const supplierRouter = express.Router();
const supplierController = require('../controllers/supplierController');

supplierRouter.get('/', supplierController.get_supplierInfo);

module.exports = supplierRouter;
