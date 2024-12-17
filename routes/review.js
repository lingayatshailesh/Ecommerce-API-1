var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let RC = require("../controller/review")

/* GET users listing. */

router.post('/create', UC.sequre, RC.reviewCreate);

router.get('/alldata', UC.sequre, RC.allReviewDataFound);

router.get('/:id', UC.sequre, RC.reviewIdFound);

router.delete('/:id', UC.sequre, RC.reviewIdDelete);

module.exports = router;
