var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let PC = require("../controller/product")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' +  uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET users listing. */

router.post('/create', upload.array('image',10) , UC.sequre, PC.productCreate);

router.get('/alldata', UC.sequre, PC.allProductDataFound);

router.get('/:id', UC.sequre, PC.productIdFound);

router.patch('/:id', UC.sequre, PC.productIdUpdate);

router.delete('/:id', UC.sequre, PC.productIdDelete);

module.exports = router;
