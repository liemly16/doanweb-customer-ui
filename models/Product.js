const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: String,
  thumb: String,
  price: Number,
  id_category: Number
});

module.exports = {
  Product
};
