var config = require('./config'),
    mongoose = require('mongoose');
module.exports = function () {
    const db = mongoose.connect(config.db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('DB Connected!'))
        .catch(err => {
            console.log('Error');
        });

    // Load the 'Task' model 
    require('../app/models/location.server.model');

    // Return the Mongoose connection instance
    return db;
};
