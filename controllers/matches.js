module.exports = {
    create,
    index,
    new: newMatch,
    show,
    update,
    delete: removeOne
}

const Match = require('./../models/match');
const User = require('./../models/user');

const getCharInfo = require('../public/javascripts/getCharInfo');
const getWeaponsInfo = require('../public/javascripts/getWeaponsInfo');

function create(req, res){
    let userId = res.locals.user._id;
    req.body.character = getCharInfo(req.body.character)[0];
    req.body.loadout = getWeaponsInfo(req.body.weapon1, req.body.weapon2);
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
        user.matches.push(match);
        user.numGames = user.matches.length;
        user.save((err) => {
            if (err) res.redirect('/matches/new');
            res.redirect('/matches');
        });
    });
};

function index(req, res){
    Match.find({}).populate('user').exec((err, matches) => {
        let reversed = matches.reverse();
        let userMatches = matches.filter(m => m.user._id.equals(res.locals.user._id));
        res.render('matches/index', {title: 'ALL MATCHES', matches: reversed, userMatches });
    })
};

function newMatch(req, res) {
    res.render('matches/new', {title: 'NEW MATCH'});
};

function show(req, res){
    Match.findById(req.params.id)
    .populate('user')
    .populate('notes')
    .populate({
        path: 'notes',
        populate: {
            path: 'postedBy',
        }
    }).exec((err, match) => {
        const isOwnUser = match.user._id.equals(res.locals.user._id)
        res.render('matches/show', {title: '', match, isOwnUser});
    });
};

async function update(req, res){
    req.body.character = getCharInfo(req.body.character)[0];
    req.body.loadout = getWeaponsInfo(req.body.weapon1, req.body.weapon2);
    req.body.win = (!!req.body.win);
    const match = await Match.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true
    });
    const user = await User.findById(res.locals.user._id).populate('matches');
    user.totalKills = user.matches.reduce((acc, curr) => {
        acc += curr.kills;
        return acc;
    }, 0);
    user.totalDeaths = user.matches.reduce((acc, curr) => {
        acc += curr.deaths;
        return acc;
    }, 0);
    user.kdr = (user.totalKills / user.totalDeaths).toFixed(2);
    match.save((err) => {
        user.save();
        res.redirect(`/matches/${match._id}`);
    })
}

async function removeOne(req, res) {
    const match = await Match.findOneAndDelete(req.params.id);
    const user = await User.findById(res.locals.user._id);
    user.totalKills -= match.kills;
    user.totalDeaths -= match.deaths;
    user.kdr = (user.totalKills / user.totalDeaths).toFixed(2);
    user.matches = user.matches.filter(m => !m._id.equals(req.params.id));
    user.numGames = user.matches.length;
    user.save((err) => {
        res.redirect('/matches');
    });
};