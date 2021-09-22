// Imports and Requires
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./dbConnection');
const customerRouter = require('./routes/customerRouter');
const orderRouter = require('./routes/orderRouter');
const orderItemRouter = require('./routes/orderItemRouter');
const productRouter = require('./routes/productRouter');
const supplierRouter = require('./routes/supplierRouter');

// Creating express App
const app = express();

// Setting server for listening
app.listen(process.env.PORT || 5000);

// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    // To use the customer route
    app.use('/api/customerInfo', customerRouter);

    // To use the order route
    app.use('/api/orderInfo', orderRouter);

    // To use the order item api route
    app.use('/api/orderItemInfo', orderItemRouter);

    // To use the product api route
    app.use('/api/productInfo', productRouter);

    // To use the supplier api route
    app.use('/api/supplierInfo', supplierRouter);
  }
});
