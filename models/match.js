const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    kills: Number,
    deaths: Number,
    kdr: Number,
    placement: Number,
    win: Boolean,
    character: String,
    weapon1: String,
    weapon2: String,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Match', matchSchema);