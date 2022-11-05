const mongoose = require('mongoose');

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
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

const World = mongoose.model('World', worldSchema);

module.exports = World;