module.exports = {
    new: newNote,
    create
}

const Match = require('./../models/match');
const Note = require('./../models/note');

function newNote(req, res){
    res.render('notes/new', {matchId: req.params.id})
}

async function create(req, res){
    const match = await Match.findById(req.params.id);
    req.body.postedBy = res.locals.user;
    const newNote = new Note(req.body);
    console.log(match, newNote);
    newNote.save((err) => {
        match.notes.push(newNote);
        match.save((err)=> {
            res.redirect(`/matches/${req.params.id}`);
        });
    });
};