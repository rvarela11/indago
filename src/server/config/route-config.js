(function(routeConfig) {

  'use strict';

  routeConfig.init = function(app) {

    // *** routes *** //
    const auth = require('../routes/auth');
    const index = require('../routes/index');
    const users = require('../routes/users');
    const places = require('../routes/places');
    const trips = require('../routes/plans');
    const search = require('../routes/search');
    const usersProfile = require('../routes/users_profile');

    // *** register routes *** //
    app.use(auth);
    app.use('/', index);
    app.use('/users', users);
    app.use('/places', places);
    app.use('/plans', trips);
    app.use('/search', search);
    app.use('/user/profile', usersProfile);

  };

})(module.exports);
