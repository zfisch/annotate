var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

exports.sequelize = sequelize;

var Annotator = require('../api/annotator/model');
var Media = require('../api/media/model');
var Annotation = require('../api/annotation/model');

/////////////////////
// DROP AND CREATE //
/////////////////////
Annotator.sync({force: true}).then(function() {
  Annotator.create({ username: 'johnny',  password: 'holler' });
  Annotator.create({ username: 'charlie', password: 'holler' }); 
  Annotator.create({ username: 'brant',   password: 'holler' });
  Annotator.create({ username: 'zack',    password: 'holler' });
});  

Media.sync({force: true}).then(function() {});
Annotation.sync({force: true}).then(function() {});

Annotator.hasMany(Media);
Media.hasOne(Annotation);