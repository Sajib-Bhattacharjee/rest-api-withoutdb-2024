const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  addAllProduct,
} = require("../controllers/products.controller");

router.get("/product", getAllProduct);
router.post("/product", addAllProduct);

module.exports = router;
