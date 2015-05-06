var express = require('express');
var app = express();
var api = require('./api');

app.get('/', function(req, res) {
  
  res.send('hello world');
});
app.get('/api/annotators/:annotatorId/media/:mediaId', api.showAnnotation);

var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

exports = module.exports = app;