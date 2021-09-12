const express = require('express');
const mysql = require('mysql');
const app = express();
var dbCred = require('./dbCredentials');
var connection = mysql.createConnection({
  host: 'localhost',
  user: dbCred.user,
  password: dbCred.password,
  database: dbCred.database,
  port: dbCred.port,
});

var data;
var x = 'test';

data = {
  formObject: [
    {
      test: x,
      id: 2,
    },
  ],
};

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    connection.query('SELECT * FROM customer', function (err, rows) {
      if (err) {
        throw err;
      } else {
        data.formObject[0].id = rows[0].CustomerID;
        data.formObject[0].test = rows[0].CustomerName;
        module.exports.data = data;
      }
    });
  }
});

module.exports = {};
