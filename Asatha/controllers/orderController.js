// Requires and Imports
const connection = require('../dbConnection');

const get_orderInfo = (req, res) => {
  var orderInfo = {
    order: [],
  };
  connection.query('SELECT * FROM `Order`', function (err, rows) {
    if (err) {
      throw err;
    } else {
      for (i = 0; i < rows.length; i++) {
        orderInfo.order.push({
          OrderId: rows[i].OrderID,
          OrderNumber: rows[i].OrderNumber,
          CustomerID: rows[i].CustomerID,
          TotalAmount: rows[i].TotalAmount,
          OrderDate: rows[i].OrderDate,
        });
      }
      res.json(orderInfo);
    }
  });
};

module.exports = {
  get_orderInfo,
};
