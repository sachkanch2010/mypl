const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    team1: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    team2: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    time: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    date: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    winner: {
        type: String,
        default: "TBD"
    }
});
const match = mongoose.model('match', schema);

module.exports = {
    match
};
