const mongoose = require('mongoose');

const worldSchema = new mongoose.Schema({
    title: {
        type: String
    },
    cubeArray: {
        type: Array,
        default: [],
        required: true,
    },
    lastUpdated: {
        type: Date
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

const World = mongoose.model('World', saveSchema);

module.exports = World;