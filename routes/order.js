var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let OC = require("../controller/order")

/* GET users listing. */

router.post('/create', UC.sequre, OC.orderCreate);

router.get('/alldata', UC.sequre, OC.allOrderDataFound);

router.get('/:id', UC.sequre, OC.orderIdFound);

router.delete('/:id', UC.sequre, OC.orderIdDelete);

module.exports = router;
