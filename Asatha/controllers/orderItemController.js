// Requires and Imports
const connection = require('../dbConnection');

const get_orderItemInfo = (req, res) => {
  var orderItemInfo = {
    orderItem: [],
  };
  connection.query('SELECT * FROM `OrderItem`', function (err, rows) {
    if (err) {
      throw err;
    } else {
      for (i = 0; i < rows.length; i++) {
        orderItemInfo.orderItem.push({
          OrderItemId: rows[i].OrderItemID,
          ProductID: rows[i].ProductID,
          Quantity: rows[i].Quantity,
          Discount: rows[i].Discount,
          MainImage: rows[i].MainImage,
        });
      }
      res.json(orderItemInfo);
    }
  });
};

module.exports = {
  get_orderItemInfo,
};
