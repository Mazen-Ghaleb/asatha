// Imports and Requires
const db = require('./data');
const mysql = require ('mysql');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const homeRoutes = require('./routes/homeRoutes');
const accountRoutes = require('./routes/accountRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');

// creating express App
const app = express();

// register view engine
//app.set('view engine', 'ejs');

// Setting server for listening 
app.listen(process.env.PORT || 5000);

// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/Home', function(req,resp){
  const id = db.query('select * from tabletest');
  console.log(id);
  //console.log(pool);
  /*pool.query('select * from tabletest' , (err,rows) => {
      if(err){
          console.log("Err in Q");
      }
      else {
      console.log(rows[0]);
      resp.status(200).send(rows[0]);
      //resp.json({ message2: "this is the message from db.js" })
  }
})*/
})
/*
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/', (req, res) => {
    res.redirect('/Home')
  });

// to use the Home routes
app.use('/Home', homeRoutes);
*/
// to use the product routes
app.use('/Product/:id', productRoutes);

// to use the cart routes
app.use('/Cart', cartRoutes);

// to use the account routes
app.use('/Account', accountRoutes);

// for 404 errors
app.use((request, response)=>{
  response.write('ERROR YOU PUT WRONG URL!');
  response.send();
});


