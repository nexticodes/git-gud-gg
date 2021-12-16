const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    totalKills: {
        type: Number,
        default: 0
    },
    totalDeaths: {
        type: Number,
        default: 0
    },    
    kdr: {
        type: Number,
        default: 0
    },
    numGames: {
        type: Number,
        default: 0
    },
    matches: [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);