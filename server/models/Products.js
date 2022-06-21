const mongoose = require("mongoose");



const productRatingSchema = mongoose.Schema({
  rating: {
    rate: Number,
    count: Number,
  },
});

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: productRatingSchema,
});

const Product = mongoose.model('Products', productSchema) 

module.exports = Product;
