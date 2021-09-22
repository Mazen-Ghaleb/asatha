// Requires and Imports
const connection = require('../dbConnection');

const get_productInfo = (req, res) => {
  var productInfo = {
    product: [],
  };
  connection.query('SELECT * FROM `Product`', function (err, rows) {
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
          MainImage: rows[i].MainImage,
          SImage1: rows[i].SImage1,
          SImage2: rows[i].SImage2,
        });
      }
      res.json(productInfo);
    }
  });
};

module.exports = {
  get_productInfo,
};
