let CATEGORY = require("../model/category")

exports.categoryCreate = async function(req, res, next) {
    try {
       
      let categoryCreate = await CATEGORY.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "Category Create Successfully",
        data : categoryCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.allCategoryFound = async function(req, res, next) {
    try {
      let allCategoryFound = await CATEGORY.find().populate('userId')

      res.status(200).json({
        status : "Success",
        message : "Category All Data Found Successfully",
        data : allCategoryFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.categoryIdFound = async function(req, res, next) {
    try {
      let categoryIdFound = await CATEGORY.findById(req.params.id)

      res.status(200).json({
        status : "Success",
        message : "Category ID Found Successfully",
        data : categoryIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.categoryIdUpdate = async function(req, res, next) {
    try {
      let categoryIdUpdate = await CATEGORY.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "Category ID Update Successfully",
        data : categoryIdUpdate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.categoryIdDelete = async function(req, res, next) {
    try {
      await CATEGORY.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Category ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }