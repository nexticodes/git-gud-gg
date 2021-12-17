const express = require('express');
const router = express.Router();

const notesCtrl = require('./../controllers/notes');

/* GET new note for match */
router.get('/matches/:id/notes/new', notesCtrl.new);

/* POST new note */


module.exports = router;