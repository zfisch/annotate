/**
 * Server set up.
 **/
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = require('./config/db');

/**
 * Import media controler to be used in API routes.
 */
var user = require('./api/user/controller');
var media = require('./api/media/controller');

/**
 * Static routes.
 */
app.use(express.static(__dirname + '/site'));

app.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/site/index.html')); });

/**
 * API routes.
 */
app.get('/api/users', user.index);  //test route, get all users
app.get('/api/media', media.index); //test route, get all media

app.get('/api/users/:userId/media/:mediaId', media.show);
app.post('/api/users/:userId/media', media.create);

/**
 * Init server.
 */
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

exports = module.exports = app;