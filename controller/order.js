let ORDER = require("../model/order")
let PRODUCT = require("../controller/product")

exports.orderCreate = async function(req, res, next) {
    try {
      // const { productCreate } = req.body

      const {quantity, price, userId, productId} = req.body
      let orderCreate = await ORDER.create({
        userId,
        productId,
        quantity ,
        price,
        totalAmount : price * quantity
      })
      
      res.status(201).json({
        status : "Success",
        message : "Order Create Successfully",
        data : orderCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.allOrderDataFound = async function(req, res, next) {
    try {
      let allOrderDataFound = await ORDER.find().populate('userId','email')

      res.status(200).json({
        status : "Success",
        message : "Order All Data Found Successfully",
        data : allOrderDataFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.orderIdFound = async function(req, res, next) {
    try {
      let orderIdFound = await ORDER.findById(req.params.id)

      res.status(200).json({
        status : "Success",
        message : "Order ID Found Successfully",
        data : orderIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.orderIdDelete = async function(req, res, next) {
    try {
      await ORDER.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Order ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }