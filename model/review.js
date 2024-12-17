const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true,
  },
  productId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "product",
    required : true,
  },
  rating : {
    type : Number,
    required : true,
    min : 1,
    max : 5
  },
  comment : {
    type : String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

let REVIEW = mongoose.model("review", reviewSchema);
module.exports = REVIEW;
