// Imports and Requires
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const data = require("./data");

// creating express App
const app = express();

// Setting server for listening 
app.listen(process.env.PORT || 5000);

// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get("/api", (req, res) => {
  res.json(data);
});