module.exports = {
    new: newNote
}

const Match = require('./../models/match');
const Note = require('./../models/note');

function newNote(req, res){
    res.render('notes/new', {matchId: req.params.id})
}