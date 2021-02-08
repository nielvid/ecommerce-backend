const mongoose = require("mongoose");

const Product = mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  salesPrice: {
    type: String,
    required: true
  },
  discount: {
    type: String,
    required: true
  }

});
module.exports = mongoose.model("Product", Product);
