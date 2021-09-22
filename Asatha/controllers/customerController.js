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

const post_customerInfo = (request, response) => {
  if (request.method == 'POST') {
    var body = '';

    request.on('data', function (data) {
      body += data;
    });

    request.on('end', function () {
      var post = JSON.parse(body);
      var values = [
        [post.id, post.FName, post.LName, post.Birthday, post.Gender],
      ];
      connection.query(
        'INSERT INTO customer (`CustomerID`, `CustomerFName`, `CustomerLName`, `CustomerBirthday`, `CustomerGender`) VALUES ?',
        [values],
        function (err, result) {
          if (err) throw err;
          console.log(
            'Inserted ' +
              result.affectedRows +
              ' row(s) successfully into Customer.'
          );
        }
      );
    });
  }
};

module.exports = {
  get_customerInfo,
  post_customerInfo,
};
