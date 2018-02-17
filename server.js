//file: server.js

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


//Creating the node.js server
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

var router = express.Router();



//Important. On port 8080
app.use('/', router);
app.listen(process.env.PORT || port);
console.log("Server listening on port " + port);