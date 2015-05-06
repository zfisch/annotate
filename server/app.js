var express = require('express');
var app = express();
var path = require('path');
var api = require('./api');

/**
 * Import media controler to be used in API routes.
 */
var media = require('./api/media/controller');
var user = require('./api/user/controller');

/**
 * Static routes.
 */
app.get('/users/:userId/media/:mediaId', function(req, res) { res.sendFile(path.join(__dirname + '/site/views/index.html')); });
app.post('/users/:userId/media', function(req, res) { res.sendFile(path.join(__dirname + '/site/views/index.html')); });

app.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/site/views/index.html')); });

/**
 * API routes.
 */
app.get('/api/users', user.index);
app.get('/api/media', media.index);
app.get('/api/charlie', api.showAnnotation);

app.get('/api/users/:userId/media/:mediaId', media.show);
app.post('/api/users/:userId/media', media.create);

var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

exports = module.exports = app;