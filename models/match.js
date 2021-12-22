const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    kills: Number,
    deaths: Number,
    kdr: Number,
    placement: Number,
    win: Boolean,
    character: Object,
    loadout: [Object],
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Match', matchSchema);