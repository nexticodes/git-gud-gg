module.exports = {
    new: newNote,
    create
}

const Match = require('./../models/match');
const Note = require('./../models/note');

function newNote(req, res){
    res.render('notes/new', {title: '', matchId: req.params.id})
}

async function create(req, res){
    const match = await Match.findById(req.params.id);
    req.body.postedBy = res.locals.user;
    req.body.matchId = match._id;
    const newNote = new Note(req.body);
    newNote.save((err) => {
        match.notes.push(newNote);
        match.save((err)=> {
            res.redirect(`/matches/${req.params.id}`);
        });
    });
};