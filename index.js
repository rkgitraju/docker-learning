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
    res.json({
        name: "Rahul", 
        age : 26, 
        profession : "Dev"
    });  
});  

//listen server. 
app.listen(port, function () {  
  console.log(`Server is running at http://localhost:${port}`);  
});