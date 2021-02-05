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
type: String
},
sales_price: {
type: String
}

})
module.exports = mongoose.model('product', Product)