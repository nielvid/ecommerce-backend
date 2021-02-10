const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Products = mongoose.Schema({
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
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  salesPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }

});
Products.plugin(mongoosePaginate);
const Product = mongoose.model("Product", Products);

module.exports = Product;
