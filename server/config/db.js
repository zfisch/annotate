///////////////////////////////////////////////////////////
// THIS FILE SETS UP SEQUELIZE AND THE POSTGRES DATABASE //
///////////////////////////////////////////////////////////
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

/**
 * Export the sequelize var for models to be defined.
 */
exports.sequelize = sequelize;

var Media = require('../api/media/model');
var User = require('../api/user/model');

User.hasMany(Media, {foreignKey:'user_id'});

/**
 * Drop and create User table.
 */
User.sync({force: true}).then(function() {
  User.create({ username: 'johnny',  password: 'holler' });
  User.create({ username: 'charlie', password: 'holler' }); 
  User.create({ username: 'brant',   password: 'holler' });
  User.create({ username: 'zack',    password: 'holler' });
});

/**
 * Drop and create Media table.
 */
Media.sync({force: true}).then(function() {
  Media.create({ link: 'https://www.youtube.com/watch?v=uFJz2IMUeDE', name: 'SNL',     notes: { 20:'SICK!', 32:'AWESOME!!!', 73:'PERFECT!'}, user_id: 2});
  Media.create({ link: 'https://www.youtube.com/watch?v=eRRfSseCe1g', name: 'Avenger', notes: { 12:'SICK!', 18:'AWESOME!!!', 33:'PERFECT!'}, user_id: 3});
  Media.create({ link: 'https://www.youtube.com/watch?v=4DAE5pTwtFk', name: 'Bro',     notes: { 10:'SICK!', 32:'AWESOME!!!', 53:'PERFECT!'}, user_id: 1});
  Media.create({ link: 'https://www.youtube.com/watch?v=lzg9Iu0uEeg', name: 'JayZ',    notes: { 12:'SICK!', 22:'AWESOME!!!', 33:'PERFECT!'}, user_id: 2});
});

/**
 * Because Media and Annotation have a one to one relationship,
 * we are putting annotation directly on the Media model for 
 * fast ramp up. Uncomment the code below to create a separate
 * annotation table.
 */
// var Annotation = require('../api/annotation/model');
// 
// Media.hasOne(Annotation, {foreignKey:'media_id'});
// 
// Annotation.sync({force: true}).then(function() {
//   Annotation.create({ notes: { 12:'SICK!', 22:'AWESOME!!!', 33:'PERFECT!'}, media_id: 1});
//   Annotation.create({ notes: { 10:'SICK!', 32:'AWESOME!!!', 53:'PERFECT!'}, media_id: 2});
//   Annotation.create({ notes: { 12:'SICK!', 18:'AWESOME!!!', 33:'PERFECT!'}, media_id: 3});
//   Annotation.create({ notes: { 20:'SICK!', 32:'AWESOME!!!', 73:'PERFECT!'}, media_id: 2});
// });

