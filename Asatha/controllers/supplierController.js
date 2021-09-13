// Requires and Imports
const connection = require('../dbConnection');

const get_supplierInfo = (req, res) => {
  var supplierInfo = {
    supplier: [],
  };
  connection.query('SELECT * FROM `supplier`', function (err, rows) {
    if (err) {
      throw err;
    } else {
      for (i = 0; i < rows.length; i++) {
        supplierInfo.supplier.push({
          SupplierID: rows[i].SupplierID,
          CompanyName: rows[i].CompanyName,
          Phone: rows[i].Phone,
        });
      }
      res.json(supplierInfo);
    }
  });
};

module.exports = {
  get_supplierInfo,
};
