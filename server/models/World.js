const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const worldSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cubeArray: {
        type: Array,
        default: [],
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    creationDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
})

const World = mongoose.model('World', worldSchema);

module.exports = World;