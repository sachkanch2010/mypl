const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    matchTime: {
        type: String,
        required: true
    },
    matchDate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    vote: {
        type: String,
        default: "-"
    },
    voted: {
        type: Boolean,
        default: false
    },
    points: {
        type: Number,
        default: 0
    }
});
const vote = mongoose.model('vote', schema);

module.exports = {
    vote
};
