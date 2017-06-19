var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Screens = require('./api/models/carnidigisignModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.2.251:27017/PetesPlace'); 
require("./api/models/carnidigisignModel.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/carnidigisignRoutes');
routes(app);


app.listen(port);


console.log('RESTful API server started on: ' + port);