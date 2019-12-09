var express = require('express');
var router = express.Router();
var mainCtrl = require('../controller/main');

/* GET users listing. */
router.get('/main/show',mainCtrl.show)


module.exports = router;
