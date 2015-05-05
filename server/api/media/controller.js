var Media = require('./model');

exports.index = function(req, res) {
  Media
    .findAll()
    .success(function(media) {
      console.log('Success! Media - findAll(): ', media);
      res.json(200, media);  
    })
    .error(function(err) {
      console.log('Error! Media - findAll(): ', err);
    });
};

exports.show = function(req, res) {
  Media
    .find(req.body.mediaId)
    // .find(req.params.mediaId) // or via annotator ID in param
    .success(function(media) {
      console.log('Media - find(): ', media);
      res.json(200, media); 
    })
    .error(function(err) {
      console.log('Error! Media - find(): ', err);
    });
};

exports.create = function(req, res) {
  Media
    .create(req.body)
    .success(function(media) {
      console.log('Media - create(): ', media)
      res.json(201, media);
    })
    .error(function(err) {
      console.log('Error! Media - create(): ', err);
    })
};

exports.update = function(req, res) {
  
};

exports.destroy = function(req, res) {

};