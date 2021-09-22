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

const get_BestSellers = (req, res) => {
  var productInfo = {
    product: [],
  };
  connection.query(
    'SELECT Product.*, COUNT(OrderItem.ProductID) AS Count_amount FROM `Product` LEFT JOIN `OrderItem` ON Product.ProductID = OrderItem.ProductID GROUP BY Product.ProductID ORDER BY OrderItem.Quantity DESC',
    function (err, rows) {
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
          });
        }
        res.json(productInfo);
      }
    }
  );
};

const get_UnderratedProducts = (req, res) => {
  var productInfo = {
    product: [],
  };
  connection.query(
    'SELECT Product.*, COUNT(OrderItem.ProductID) AS Count_amount FROM `Product` LEFT JOIN `OrderItem` ON Product.ProductID = OrderItem.ProductID GROUP BY Product.ProductID ORDER BY OrderItem.Quantity ASC',
    function (err, rows) {
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
          });
        }
        res.json(productInfo);
      }
    }
  );
};

const get_RecentPurchases = (req, res) => {
  var productInfo = {
    product: [],
  };
  connection.query(
    'SELECT * FROM Product LEFT JOIN OrderItem ON Product.ProductID = OrderItem.ProductID LEFT JOIN `Order` as Ord ON OrderItem.OrderItemID = Ord.OrderID ORDER BY Ord.OrderDate DESC;',
    function (err, rows) {
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
          });
        }
        res.json(productInfo);
      }
    }
  );
};

module.exports = {
  get_productInfo,
  get_BestSellers,
  get_UnderratedProducts,
  get_RecentPurchases,
};
