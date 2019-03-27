//directy returning data without any routes http://localhost:3000 you will get the response

// var http = require('http');
// http.createServer((req,resp)=>{
//   resp.setHeader('Access-Control-Allow-Origin', '*');
//   resp.writeHead(200, {'content-type':'application/json'});
 
//   var obj = {'result':false};

//   resp.end(JSON.stringify(obj));  
// }).listen(3000);

//express using express we get data from a file and its has routes http://localhost:3000/test 

var express = require('express');
var app = express();
app.get('/test',function(req,resp){
  resp.setHeader('Access-Control-Allow-Origin', '*');
  let jsonData = require('./data.json');
  console.log(jsonData);
  resp.json(jsonData);
});
app.listen(3000);




//getting data from remote url and return the data using express with the http://localhost:3000



// var Request = require("request");
// var responseData;
// Request.get("http://httpbin.org/ip", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
//     responseData = JSON.parse(body);
// });

// var express = require('express');
// var app = express();
// app.get('/test',function(req,resp){
//   resp.setHeader('Access-Control-Allow-Origin', '*');
//   //let jsonData = require('./data.json');
//   //console.log(jsonData);
//   resp.json(responseData);
// });
// app.listen(3000);
