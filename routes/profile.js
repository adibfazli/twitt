var express     = require('express');
var router      = express.Router();
var profileCtrl = require('../controller/profile')

router.get('/show/:id' , profileCtrl.show)

module.exports  = router;