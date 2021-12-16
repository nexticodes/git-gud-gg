module.exports = {
    create
}

const Match = require('./../models/match');
const User = require('./../models/user');

function create(req, res){
    let userId = res.locals.user._id;
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