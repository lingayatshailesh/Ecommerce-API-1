var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let CARTC = require("../controller/cart")

/* GET users listing. */

router.post('/create', UC.sequre, CARTC.cartCreate);

router.get('/alldata', UC.sequre, CARTC.allCartDataFound);

router.get('/:id', UC.sequre, CARTC.cartIdFound);

router.delete('/:id', UC.sequre, CARTC.cartIdDelete);

module.exports = router;
