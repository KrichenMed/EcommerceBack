// Require mongoose
const mongoose = require("mongoose");

// Define the schema
const amazonProductSchema = new mongoose.Schema({
  asin: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  productURL: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  listPrice: {
    type: Number,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  isBestSeller: {
    type: Boolean,
    required: true,
  },
  boughtInLastMonth: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("amazonProduct", amazonProductSchema);
