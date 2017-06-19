'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DigiSignSchema = new Schema({
  name: {
    type: String,
    Required: 'Enter name of the item'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  },
  uri: {
    type: String
  },
  feed: {
    type: String,
    Required: 'enter name of feed'
  },
  order: {
    type: String,
    Required: 'enter order in feed'
  },
  duration: {
    type: String,
    Required: 'enter duration of time'
  },
  sign_text: {
    type: String
  },
  sign_type: {
    type: String,
    Required: 'enter type of text or image'
  }
});

module.exports = mongoose.model('DigiSignSchema', DigiSignSchema);