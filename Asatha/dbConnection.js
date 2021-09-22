// Imports and Requires
const mysql = require('mysql');
const dbCred = require('./dbCredentials');

const connection = mysql.createConnection({
  host: dbCred.host,
  user: dbCred.user,
  password: dbCred.password,
  database: dbCred.database,
});

module.exports = connection;
