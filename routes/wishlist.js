var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let WC = require("../controller/wishlist")

/* GET users listing. */

router.post('/create', UC.sequre, WC.wishlistCreate);

router.get('/alldata', UC.sequre, WC.allWishlistDataFound);

router.get('/:id', UC.sequre, WC.wishlistIdFound);

router.delete('/:id', UC.sequre, WC.wishlistIdDelete);

module.exports = router;
