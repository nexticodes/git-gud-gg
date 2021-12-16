var express = require('express');
var router = express.Router();

const matchesCtrl = require('./../controllers/matches');

/* GET matches listing. */
router.get('/', matchesCtrl.index);

/* POST add match to matches */
router.post('/', matchesCtrl.create);

/* GET matches form - NEW */
router.get('/new', function(req, res) {
  res.render('matches/new');
});

module.exports = router;
