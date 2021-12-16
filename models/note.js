const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    category: {
        type: String,
        enum: ['Positioning', 'Mechanics', 'Communication']
    },
    content: {
        type: String,
        required: true
    },
    importance: Number,
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.Model('Note', noteSchema)