const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

let WISHLIST = mongoose.model("wishlist", wishlistSchema);
module.exports = WISHLIST;
