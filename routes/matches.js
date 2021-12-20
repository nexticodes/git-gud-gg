var express = require('express');
var router = express.Router();

const matchesCtrl = require('./../controllers/matches');

/* GET matches listing. */
router.get('/', matchesCtrl.index);

/* POST add match to matches */
router.post('/', matchesCtrl.create);

/* GET matches form - NEW */
router.get('/new', matchesCtrl.new);

/* GET matches/:id - show page */
router.get('/:id', matchesCtrl.show);

/* UPDATE matches/:id - show page */
router.put('/:id', matchesCtrl.update);

/* DELETE matches/:id */
router.delete('/:id', matchesCtrl.delete);


module.exports = router;
