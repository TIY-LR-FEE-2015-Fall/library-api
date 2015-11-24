var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var params = {title: 'EmberGreps'};

  res.render('index', params);
});

module.exports = router;
