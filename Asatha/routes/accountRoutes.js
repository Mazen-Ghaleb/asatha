// Requires and Imports
const express = require('express');
const accRouter = express.Router();
const accController = require('../controllers/accountController');

// home
accRouter.get('/', (req, res) => {
    res.redirect('/Account/Login')
});
// for login
accRouter.get('/Login', accController.login_account);

// for signup
accRouter.get('/Signup', accController.create_account);

// for forget password
accRouter.get('/Forget', accController.forget_account);


//exporting the router
module.exports = (accRouter);