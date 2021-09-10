// Requires and Imports
const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeController');

// for home
homeRouter.get('/', homeController.view_home);

//exporting the router
module.exports = (homeRouter);