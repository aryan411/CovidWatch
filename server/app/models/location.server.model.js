const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LocationSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    province: { 
        type: String
    },
    postalCode: {
        type: String
    },
    vaccineType: {
        type: String
    },
    available: {
        type: Boolean
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
});
module.exports = mongoose.model('Location', LocationSchema);