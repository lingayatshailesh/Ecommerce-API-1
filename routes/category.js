var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let CC = require("../controller/category")


/* GET users listing. */

router.post('/create', UC.sequre, CC.categoryCreate);

router.get('/alldata', UC.sequre, CC.allCategoryFound);

router.get('/:id', UC.sequre, CC.categoryIdFound);

router.patch('/:id', UC.sequre, CC.categoryIdUpdate);

router.delete('/:id', UC.sequre, CC.categoryIdDelete);

module.exports = router;



