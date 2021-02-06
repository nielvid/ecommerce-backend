var mongoose = require('mongoose');



var Product = mongoose.Schema({
product_name: {
type: String,
required: true
},
description: {
type: String,
required: true
},
images: {
type: String
},
category: {
type: String
},
price: {
type: String,
required: true
},
sales_price: {
type: String,
required: true
},
discount:{
    type: String,
required: true
}

})
module.exports = mongoose.model('product', Product)