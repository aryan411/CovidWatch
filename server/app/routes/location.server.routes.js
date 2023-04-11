const location = require('../controllers/location.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'locations' base routes 
    app.route('/api/locations')
        .get(location.list)
        .post(location.create);
    // Set up the 'locations' parameterized routes
    app.route('/api/locations/:locationId')
        .get(location.read)
        .put(location.update)
        .delete(location.delete);
    // Set up the 'locationId' parameter middleware
    app.param('locationId', location.locationByID);
}