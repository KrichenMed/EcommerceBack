const express = require("express");
const {
  addproduct,
  getproduct,
  deleteproduct,
  editproduct,
  getproductbyid,
  getproductbyasin,
} = require("../Controllers/amazonProduct");
const router = express.Router();

// add product
router.post("/addproduct", addproduct);

// Get product
router.get("/getproduct", getproduct);

//Get product by id 
router.get("/getproductbyid/:_id", getproductbyid);

//Get product by id 
router.get("/getproductbyasin/:category_name", getproductbyasin);

// delete product
router.delete("/deleteproduct/:_id", deleteproduct);

// edit product
router.put("/editproduct/:_id", editproduct);

module.exports = router;
