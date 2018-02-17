'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
// module.exports = {
//     gets: gets,
//     puts: puts,
//     deletes: deletes,
//     posts: posts
// };

function put(req,res){
  //If no headers or body say so
  if(req.headers.empty){
      res.send("No headers sent");
  } else{
      var myHeaders = req.headers;
      res.json({ keys: values, header: req.headers})
    //   Object.keys(myHeaders).forEach(function(key){
    //       console.log("Header Key: " + key + "    Value: " + myHeaders[key]);
    //       res.write("Header Key: " + key + "    Value: " + myHeaders[key] + '</br>');

    //   });
  }
  if(req.body.empty){
       res.send("No body sent");
  } else{
      var myBody = req.body;
      Object.keys(myBody).forEach(function(key){
          console.log("Body Key: " + key + "    Value: " + myBody[key]);
          res.write("Body Key: " + key + "    Value: " + myBody[key] + '</br>');
      });       
  }
};


function post(req,res){
    //If no headers or body say so
    if(req.headers.empty){
        res.send("No headers sent");
    } else{
        var myHeaders = req.headers;
        Object.keys(myHeaders).forEach(function(key){
            console.log("Header Key: " + key + "    Value: " + myHeaders[key]);
            res.write("Header Key: " + key + "    Value: " + myHeaders[key] + '</br>');
        });
    }
    if(req.body.empty){
         res.send("No body sent");
    } else{
        var myBody = req.body;
        Object.keys(myBody).forEach(function(key){
            console.log("Body Key: " + key + "    Value: " + myBody[key]);
            res.write("Body Key: " + key + "    Value: " + myBody[key] + '</br>');
        });       
    }
  };


  function deleteNode(req,res){
    //If no headers or body say so
    if(req.headers.empty){
        res.send("No headers sent");
    } else{
        var myHeaders = req.headers;
        Object.keys(myHeaders).forEach(function(key){
            console.log("Header Key: " + key + "    Value: " + myHeaders[key]);
            res.write("Header Key: " + key + "    Value: " + myHeaders[key] + '</br>');
        });
    }
    if(req.body.empty){
         res.send("No body sent");
    } else{
        var myBody = req.body;
        Object.keys(myBody).forEach(function(key){
            console.log("Body Key: " + key + "    Value: " + myBody[key]);
            res.write("Body Key: " + key + "    Value: " + myBody[key] + '</br>');
        });       
    }
  };



  function get(req,res){
    //If no headers or body say so
    if(req.headers.empty){
        res.send("No headers sent");
    } else{
        var myHeaders = req.headers;
        Object.keys(myHeaders).forEach(function(key){
            console.log("Header Key: " + key + "    Value: " + myHeaders[key]);
            res.write("Header Key: " + key + "    Value: " + myHeaders[key] + '</br>');
        });
    }
    if(req.body.empty){
         res.send("No body sent");
    } else{
        var myBody = req.body;
        Object.keys(myBody).forEach(function(key){
            console.log("Body Key: " + key + "    Value: " + myBody[key]);
            res.write("Body Key: " + key + "    Value: " + myBody[key] + '</br>');
        });       
    }
  };



// app.use('*', function(req, res, next) {
//   res.statusCode = 405;
//   //Code to send back response for invalid verb
//   console.log("Not a valid route");

// });