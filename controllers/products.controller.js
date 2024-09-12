const products = require("../models/products.model");

const path = require("path");

const getAllProduct = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

const addAllProduct = (req, res) => {
  const productname = req.body.productname;
  const productquantity = Number(req.body.productquantity);

  const product = {
    productname,
    productquantity,
  };
  products.push(product);
  res.status(200).json({
    success: true,
    products,
  });
};

module.exports = {
  getAllProduct,
  addAllProduct,
};
