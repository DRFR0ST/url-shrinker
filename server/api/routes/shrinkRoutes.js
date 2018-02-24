'use strict';
module.exports = function(app) {
  var userLogin = require('../controllers/shrinkController');

  app.route('/')
    .post(userLogin.requestHandler);
};
