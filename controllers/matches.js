module.exports = {
    create,
    index,
    new: newMatch,
    show
}

const Match = require('./../models/match');
const User = require('./../models/user');

const getCharInfo = require('../public/javascripts/getCharInfo');

function create(req, res){
    let userId = res.locals.user._id;
    req.body.character = getCharInfo(req.body.character)[0];
    req.body.win = (!!req.body.win);
    req.body.user = userId;
    // Save the match
    const match = new Match(req.body);
    match.save((err)=>{
        if (err) res.redirect('/matches/new');
    });
    User.findById(userId, (err, user)=> {
        if (err) res.redirect('/');
        user.totalKills += parseInt(req.body.kills);
        user.totalDeaths += parseInt(req.body.deaths);
        user.kdr = (user.totalKills / user.totalDeaths).toFixed(2);
        user.numGames++;
        user.matches.push(match);
        user.save((err) => {
            if (err) res.redirect('/matches/new');
            res.redirect('/matches');
        });
    });
};

function index(req, res){
    Match.find({}, (err, matches) => {
        res.render('matches/index', {title: 'ALL MATCHES', matches});
    })
};

function newMatch(req, res) {
    res.render('matches/new', {title: 'NEW MATCH'});
};

function show(req, res){
    Match.findById(req.params.id).populate('notes').populate({
        path: 'notes',
        populate: {
            path: 'postedBy',
        }
    }).exec((err, match) => {
        const isOwnUser = match.user._id.equals(res.locals.user._id)
        res.render('matches/show', {title: '', match, isOwnUser});
    });
}