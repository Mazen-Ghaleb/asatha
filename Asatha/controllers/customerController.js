// Requires and Imports
const connection = require('../dbConnection');

const get_customerInfo = (req, res) => {
  var customerInfo = {
    customer: [],
  };
  connection.query('SELECT * FROM `customer`', function (err, rows) {
    if (err) {
      throw err;
    } else {
      for (i = 0; i < rows.length; i++) {
        customerInfo.customer.push({
          id: rows[i].CustomerID,
          FName: rows[i].CustomerFName,
          LName: rows[i].CustomerLName,
          Birthday: rows[i].CustomerBirthday,
          Gender: rows[i].CustomerGender,
        });
      }
      res.json(customerInfo);
    }
  });
};

module.exports = {
  get_customerInfo,
};
