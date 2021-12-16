var express = require('express');
var router = express.Router();

/* GET matches listing. */
router.get('/', function(req, res, next) {
  res.render('matches/index');
});

/* GET matches form - NEW */
router.get('/new', function(req, res, next) {
  res.render('matches/new');
});

module.exports = router;
