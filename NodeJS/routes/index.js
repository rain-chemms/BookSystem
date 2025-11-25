var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/admin', function(req, res, next) {
  res.render('admin');
});

router.post('/reader-login', function(req, res, next) {
  res.render('reader-login');
});

module.exports = router;