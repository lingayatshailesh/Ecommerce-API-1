let CART = require("../model/cart")

exports.cartCreate = async function(req, res, next) {
    try {
      let cartCreate = await CART.create(req.body)
      
      res.status(201).json({
        status : "Success",
        message : "Cart Create Successfully",
        data : cartCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.allCartDataFound = async function(req, res, next) {
    try {
      let allCartDataFound = await CART.find()

      res.status(200).json({
        status : "Success",
        message : "Cart All Data Found Successfully",
        data : allCartDataFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.cartIdFound = async function(req, res, next) {
    try {
      let cartIdFound = await CART.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Cart ID Found Successfully",
        data : cartIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.cartIdDelete = async function(req, res, next) {
    try {
      await REVIEW.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Cart ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }