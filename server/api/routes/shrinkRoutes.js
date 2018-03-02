'use strict';
module.exports = function(app) {
  var shrinkUrl = require('../controllers/shrinkController');

  app.route('/')
    .post(shrinkUrl.requestHandler);
};
