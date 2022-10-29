const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
    name: {
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

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;