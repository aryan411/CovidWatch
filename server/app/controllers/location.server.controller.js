const mongoose = require('mongoose');
const Location = mongoose.model('Location');

// Create a new error handling controller method
const getErrorMessage = function (err) {
    // Define the error message variable
    let message = '';
    // If an internal MongoDB error occurs get the error message
    if (err.code) {
        switch (err.code) {
            // If a unique index error occurs set the message error
            case 11000:
            case 11001:
                message = 'Location already exists';
                break;
            // If a general error occurs set the message error
            default:
                message = 'Something went wrong';
        }
    } else {
        // Grab the first error message from a list of possible errors
        for (const errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    // Return the message error
    return message;
}

// Create a new controller method that creates new 'Location' documents
exports.create = function (req, res) {
    // Create a new 'Location' object
    const location = new Location(req.body);
    // Try saving the 'Location' document
    location.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the 'Location' document
            res.json(location);
        }
    });
}

// Create a new controller method that retrieves a list of 'Location' documents
exports.list = function (req, res) {
    // Use the model 'find' method to get a list of 'Location' documents
    Location.find({}, (err, locations) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the 'Location' document
            res.json(locations);
        }
    });
}

// Create a new controller method that returns an existing 'Location' document
exports.read = function (req, res) {
    res.json(req.location);
}

// Create a new controller method that updates an existing 'Location' document
exports.update = function (req, res) {
    // Get the 'Location' document from the 'request' object
    const location = req.location;
    // Update the 'Location' document using the 'Location' instance's 'save' method
    location.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the 'Location' document
            res.json(location);
        }
    });
}

// Create a new controller method that delete an existing 'Location' document
exports.delete = function (req, res) {
    // Get the 'Location' document from the 'request' object
    const location = req.location;
    // Use the model 'remove' method to delete the 'Location' document
    location.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the 'Location' document
            res.json(location);
        }
    });
}

// Create a new controller middleware that retrieves a single existing 'Location' document
exports.locationByID = function (req, res, next, id) {
    Location.findById(id).exec((err, location) => {
        if (err) return next(err);
        if (!location) return next(new Error('Failed to load location ' + id));
        req.location = location;
        next();
    });
}
