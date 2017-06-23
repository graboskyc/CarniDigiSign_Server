'use strict';


var mongoose = require('mongoose'),
  Signs = mongoose.model('DigiSignSchema');

///////////////////
// Screens
///////////////////

'use strict';


var mongoose = require('mongoose'),
  Screen = mongoose.model('DigiSignSchema');

exports.list_all_screens = function(req, res) {
  Screen.find({}, function(err, s) {
    if (err)
      res.send(err);
    res.json(s);
  });
};

exports.create_a_screen = function(req, res) {
  var new_screen = new Screen(req.body);
  new_screen.save(function(err, s) {
    if (err)
      res.send(err);
    res.json(s);
  });
};


exports.read_a_screen = function(req, res) {
  Screen.findById(req.params.screenId, function(err, s) {
    if (err)
      res.send(err);
    res.json(s);
  });
};


exports.update_a_screen = function(req, res) {
  Screen.findOneAndUpdate({_id: req.params.screenId}, req.body, {new: true}, function(err, s) {
    if (err)
      res.send(err);
    res.json(s);
  });
};


exports.delete_a_screen = function(req, res) {
  Screen.remove({
    _id: req.params.screenId
  }, function(err, s) {
    if (err)
      res.send(err);
    res.json({ message: 'Screen successfully deleted' });
  });
};

exports.list_screens_by_feed = function(req, res) {
  Screen.find({feed: req.params.feedId}, function(err, s) {
    if (err)
      res.send(err);
    res.json(s);
  });
};
