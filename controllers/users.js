module.exports = {
    show
}

const User = require('./../models/user');
const getCharInfo = require('../public/javascripts/getCharInfo');
const getWeaponsInfo = require('../public/javascripts/getWeaponsInfo');

function show(req, res) {
    User.findById(req.params.id).populate('matches').exec((err, user) => {
        const charsPlayed = user.matches.reduce((acc, curr) => {
            if (acc[curr.character.name]) {
                acc[curr]++
            } else {
                acc[curr.character.name] = 1;
            }
            return acc;
        }, {});
        const weaponsUsed = user.matches.reduce((acc, curr) => {
            curr.loadout.forEach((w) => {
                if (acc[w.name]) {
                    acc[w.name]++
                } else {
                    acc[w.name] = 1
                }
            });
            return acc;
        }, {});

        user.faveChar = getCharInfo(findMax(charsPlayed))[0];
        user.faveWeapon = getWeaponsInfo(findMax(weaponsUsed), '')[0];
        res.render('users/show', {title: '' , user});
    })
}


function findMax(obj) {
    let keys = Object.keys(obj);
    let max = keys[0];
    for (const k in obj){
        if (obj[k] > obj[max]){
            max = k;
        }
    }
    return max;
}