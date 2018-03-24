var express = require('express');
var router = express.Router();
var express = require('express');
var request = require('request');
var app = express(); 

// Here the server will request a json file to the two servers  and render them to index.ejs 
router.get('/', function(req, res) { 
  var jj;
      request.get({ url: "http://localhost:4000/api/movieList"}, function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
              var jj = JSON.stringify(body)       
              ans(jj)
                 } 
             }); 
         function ans(values){
             request.get({ url: "http://localhost:6000/api/movieList"}, function(error, response, body) { 
                if (!error && response.statusCode == 200) { 
                var tt = JSON.stringify(body)
                  
                res.render('index', {data : values , data2:tt});
                   } 
               }); }
     }); 
module.exports = router;
