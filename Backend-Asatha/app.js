const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000);

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.write('hello world');
    res.send();
  });

