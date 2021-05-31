const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Users = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 11,
    max: 11
  },
  confirmPassword: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  telephone: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  token: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Customer = mongoose.model("Customer", Users);

module.exports = Customer;
