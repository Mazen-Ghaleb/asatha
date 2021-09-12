// Requires and Imports
const connection = require('../dbConnection');

const get_productInfo = (req, res) => {
  var productInfo = {
    product: [],
  };
  connection.query('SELECT * FROM `product`', function (err, rows) {
    if (err) {
      throw err;
    } else {
      for (i = 0; i < rows.length; i++) {
        productInfo.product.push({
          ProductID: rows[i].ProductID,
          ProductName: rows[i].ProductName,
          SupplierID: rows[i].SupplierID,
          UnitPrice: rows[i].UnitPrice,
          Discount: rows[i].Discount,
          Description: rows[i].Description,
        });
      }
      res.json(productInfo);
    }
  });
};

module.exports = {
  get_productInfo,
};
