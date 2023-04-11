const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: { 
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    vaccineType: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Location', LocationSchema);