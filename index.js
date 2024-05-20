// import express module.
const express = require('express');  
const app = express();  
const port = 8081;

// Custom middleware function to log request path
function logRequestPath(req, res, next) {
    console.log(`Request Path: http://localhost:${port}${req.path}`);
    next();
}
  
// Mount the middleware to run for every request
app.use(logRequestPath);

// define route
app.get('/', function (req, res) {  
  res.send('Welcome to learnhindituts.com');  
});  

app.get('/test1', function (req, res) {  
  res.json([
    {
      name: "Paul", 
      age : 26, 
      profession : "Developer"
    }, 
    {
      name: "John", 
      age : 90, 
      profession : "Project Manager"
    }, 
    {
      name: "Doe", 
      age : 43, 
    }, 
  ]);  
});  

//listen server. 
app.listen(port, function () {  
  console.log(`Server is running at http://localhost:${port}`);  
});