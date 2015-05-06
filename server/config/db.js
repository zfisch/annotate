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
Annotator.hasMany(Media, {foreignKey:'annotator_id'});
// Media.hasOne(Annotation, {foreignKey:'media_id'});

Annotator.sync({force: true}).then(function() {
  Annotator.create({ username: 'johnny',  password: 'holler' });
  Annotator.create({ username: 'charlie', password: 'holler' }); 
  Annotator.create({ username: 'brant',   password: 'holler' });
  Annotator.create({ username: 'zack',    password: 'holler' });
});  

Media.sync({force: true}).then(function() {
  Media.create({ link: 'https://www.youtube.com/watch?v=uFJz2IMUeDE', source: 'YouTube', name: 'SNL', notes: { 20:'SICK!!!!!!!!!!!!!!!!!', 32:'AWESOME!!!', 73:'PERFECT!!!!!!!!!!'}, annotator_id: 2});
  Media.create({ link: 'https://www.youtube.com/watch?v=eRRfSseCe1g', source: 'YouTube', name: 'Avenger', notes: { 12:'SICK!!!!!!!!!!!!!!!!!', 18:'AWESOME!!!', 33:'PERFECT!!!!!!!!!!'}, annotator_id: 3});
  Media.create({ link: 'https://www.youtube.com/watch?v=4DAE5pTwtFk', source: 'YouTube', name: 'Bro',  notes: { 10:'SICK!!!!!!!!!!!!!!!!!', 32:'AWESOME!!!', 53:'PERFECT!!!!!!!!!!'}, annotator_id: 1});
  Media.create({ link: 'https://www.youtube.com/watch?v=lzg9Iu0uEeg', source: 'YouTube', name:'JayZ', notes: { 12:'SICK!!!!!!!!!!!!!!!!!', 22:'AWESOME!!!', 33:'PERFECT!!!!!!!!!!'}, annotator_id: 2});
});
// Annotation.sync({force: true}).then(function() {
//   Annotation.create({ notes: { 12:'SICK!!!!!!!!!!!!!!!!!', 22:'AWESOME!!!', 33:'PERFECT!!!!!!!!!!'}, media_id: 1});
//   Annotation.create({ notes: { 10:'SICK!!!!!!!!!!!!!!!!!', 32:'AWESOME!!!', 53:'PERFECT!!!!!!!!!!'}, media_id: 2});
//   Annotation.create({ notes: { 12:'SICK!!!!!!!!!!!!!!!!!', 18:'AWESOME!!!', 33:'PERFECT!!!!!!!!!!'}, media_id: 3});
//   Annotation.create({ notes: { 20:'SICK!!!!!!!!!!!!!!!!!', 32:'AWESOME!!!', 73:'PERFECT!!!!!!!!!!'}, media_id: 2});
// });

