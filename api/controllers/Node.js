'use strict';

//node_modules required.
//Packages should be a dependency in the package.json 
var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var port = 8080;
var util = require('util');


module.exports = {

    put: put,

};



function put(req,res){
  //If no headers or body say so
  if(req.headers == null){
      res.send("No headers sent");
  } else{
    var values = [];
    var myHeaders = [];
    Object.keys(req.headers).forEach(function(key){
      values.push(key);
      myHeaders.push(req.headers[key])
    });
    console.log(values);
    console.log(myHeaders);
    //res.json({keys:values, headers: myHeaders});
  };
}
