var express = require('express');
var router = express.Router();
var postCtrl = require('../controller/posts');

router.post('/post/add' , postCtrl.create);
router.delete('/post/delete/:id' , postCtrl.delete);
module.exports = router;