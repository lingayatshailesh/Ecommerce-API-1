var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let PMC = require("../controller/payment")

/* GET users listing. */

router.post('/create', UC.sequre, PMC.paymentCreate);

router.get('/:id', UC.sequre, PMC.paymentIdFound);

module.exports = router;
