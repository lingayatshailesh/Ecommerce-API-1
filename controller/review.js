let REVIEW = require("../model/review")

exports.reviewCreate = async function(req, res, next) {
    try {
      let reviewCreate = await REVIEW.create(req.body)
      
      res.status(201).json({
        status : "Success",
        message : "Review Create Successfully",
        data : reviewCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.allReviewDataFound = async function(req, res, next) {
    try {
      let allReviewDataFound = await REVIEW.find()

      res.status(200).json({
        status : "Success",
        message : "Review All Data Found Successfully",
        data : allReviewDataFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.reviewIdFound = async function(req, res, next) {
    try {
      let reviewIdFound = await REVIEW.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Review ID Found Successfully",
        data : reviewIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.reviewIdDelete = async function(req, res, next) {
    try {
      await REVIEW.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Review ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }