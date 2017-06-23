'use strict';
module.exports = function(app) {
  var sign = require('../controllers/carnidigisignController');


  app.route('/screens')
    .get(sign.list_all_screens)
    .post(sign.create_a_screen);

  app.route('/screens/:screenId')
    .get(sign.read_a_screen)
    .put(sign.update_a_screen)
    .delete(sign.delete_a_screen);

};
