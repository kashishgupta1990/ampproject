var express = require('express');
var app = express();
var ENV_PORT = process.env.PORT || 8080;
var ENV_HOST = process.env.HOST || 'http://localhost';
var CURRENT_DIR = __dirname;
var STATIC_DIR_PATH = CURRENT_DIR + '/public';

console.log('DIR NAME ',STATIC_DIR_PATH);

app.use(express.static(STATIC_DIR_PATH));

app.listen(ENV_PORT,function(){
  console.log('Server Listening on '+ ENV_HOST +':'+ENV_PORT);
});
