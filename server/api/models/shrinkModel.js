'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schemat uzytkownika
var ShrinkSchema = new Schema({
  created: String,
  expiry: String,
  url: {
    type: String,
    required: 'Enter the url you want to shrink!'
  },
  name: { 
    type: String,
    required: 'Enter the name of your shrink!'
  }
});

module.exports = mongoose.model('Users', ShrinkSchema);
