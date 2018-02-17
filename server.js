// //file: server.js

//node_modules required.
//Packages should be a dependency in the package.json 
var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var authController = require('./auth');
var authJwtController = require('./auth_jwt');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var port = 8080;


// //Creating the node.js server
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// var router = express.Router();



// //Important. On port 8080
// app.use('/', router);
// app.listen(process.env.PORT || port);
// console.log("Server listening on port " + port);


'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port);
  console.log("Server listening on port " + port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});