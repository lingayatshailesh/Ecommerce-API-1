const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName : {
    type : String,
    required : true,
    unique : true
  },
  discription : {
    type : String
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users"
  }
});

let CATEGORY = mongoose.model("category",categorySchema)
module.exports = CATEGORY
