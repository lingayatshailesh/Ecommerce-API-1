let PAYMENT = require("../model/payment")

exports.paymentCreate = async function(req, res, next) {
    try {
      let paymentCreate = await PAYMENT.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "Payment Create Successfully",
        data : paymentCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.paymentIdFound = async function(req, res, next) {
    try {
      let paymentIdFound = await PAYMENT.findById(req.params.id)

      res.status(200).json({
        status : "Success",
        message : "Payment ID Found Successfully",
        data : paymentIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }