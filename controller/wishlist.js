let WISHLIST = require("../model/wishlist")

exports.wishlistCreate = async function(req, res, next) {
    try {
      let wishlistCreate = await WISHLIST.create(req.body)
      
      res.status(201).json({
        status : "Success",
        message : "Wishlist Create Successfully",
        data : wishlistCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.allWishlistDataFound = async function(req, res, next) {
    try {
      let allWishlistDataFound = await WISHLIST.find()

      res.status(200).json({
        status : "Success",
        message : "Wishlist All Data Found Successfully",
        data : allWishlistDataFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.wishlistIdFound = async function(req, res, next) {
    try {
      let wishlistIdFound = await WISHLIST.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Wishlist ID Found Successfully",
        data : wishlistIdFound
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.wishlistIdDelete = async function(req, res, next) {
    try {
      await REVIEW.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Wishlist ID Delete Successfully"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }