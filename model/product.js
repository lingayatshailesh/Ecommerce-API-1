const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title : {
    type : String,
    required : true,
    unique : true
  },
  descriptionn : {
    type : String,
    required : true
  },
  image : [{
    type : String,
    required : true
  }],
  price : {
    type: Number,
    required: true,
    min: 0
  },
  stock : {
    type: Number,
    required: true,
    min: 0
  },
  dateAdded : {
    type: Date,
    default: Date.now,
  },
  categoryId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'category',
    required : true
  }

});

let PRODUCT = mongoose.model("product",productSchema)
module.exports = PRODUCT
