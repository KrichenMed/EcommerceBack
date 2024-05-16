const express = require("express");
const {
  addproduct,
  getproduct,
  deleteproduct,
  editproduct,
} = require("../Controllers/product");
const router = express.Router();

// add product
router.post("/addproduct", addproduct);

// Get product
router.get("/getproduct", getproduct);

// delete product
router.delete("/deleteproduct/:_id", deleteproduct);

// edit product
router.put("/editproduct/:_id", editproduct);

module.exports = router;
