var config = require('../config/db');
var Annotator = require('./annotator/controller');

exports.showAnnotators = function(req, res) {
  Annotator.index(req, res);
};

exports.showMedia = function() {
  console.log('hooller');
};

exports.createAnnotation = function() {

};

exports.createMedia = function() {
  
};

exports.updateAnnotation = function() {

};