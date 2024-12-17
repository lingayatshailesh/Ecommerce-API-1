const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase: true,
  },
  password : {
    type : String,
    required : true
  },
  role : {
    type : String,
    enum : ['admin', 'user']
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

let USER = mongoose.model("users",userSchema)
module.exports = USER
