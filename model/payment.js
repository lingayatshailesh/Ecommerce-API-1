const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  orderId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'order',
    required : true
  },
  paymentMethod : {
    type : String,
    required : true
  },
  amount : {
    type : Number,
    required : true
  },
  paymentDate : {
      type: Date,
      default: Date.now
  }
});

let PAYMENT = mongoose.model("payment",paymentSchema)
module.exports = PAYMENT
