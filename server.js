var express = require('express');
var app = express();
var ENV_PORT = process.env.PORT || 8080;
var ENV_HOST = process.env.HOST || 'http://localhost';

app.get('/',function(req,res){
  res.send('Hello World');
});

app.listen(ENV_PORT,function(){
  console.log('Server Listening on PORT:'+ENV_PORT);
});
