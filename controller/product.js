let PRODUCT = require("../model/product")

exports.productCreate = async function(req, res, next) {
    try {
      req.body.image = req.files.map(el => el.filename)
      let productCreate = await PRODUCT.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "Product Create Successfully",
        data : productCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.allProductDataFound = async function(req, res, next) {
    try {
      let allProductDataFound = await PRODUCT.find().populate('categoryId','userId')

      res.status(200).json({
        status : "Success",
        message : "Product All Data Found Successfully",
        data : allProductDataFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.productIdFound = async function(req, res, next) {
    try {
      let productIdFound = await PRODUCT.findById(req.params.id)

      res.status(200).json({
        status : "Success",
        message : "Product ID Found Successfully",
        data : productIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.productIdUpdate = async function(req, res, next) {
    try {
      let productIdUpdate = await PRODUCT.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "Product ID Update Successfully",
        data : productIdUpdate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.productIdDelete = async function(req, res, next) {
    try {
      await PRODUCT.findByIdAndDelete(req.params.id)

      res.status(200).json({
        status : "Success",
        message : "Product ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }
