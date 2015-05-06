var Media = require('./model');

exports.index = function(req, res) {
  console.log(Media);

  Media
    .findAll()
    .then(function(medias) {
      console.log('Success! Media - findAll(): ', medias);
      res.json(200, medias);  
    })
    .catch(function(err) {
      console.log('Error! Media - findAll(): ', err);
    });
};

exports.show = function(req, res) {
  Media
    // .find(req.body.mediaId)
    .find({where: {media_id: req.params.mediaId }}) // or via annotator ID in param
    .then(function(media) {
      console.log('Media - find(): ', media);
      res.json(200, media); 
    })
    .catch(function(err) {
      console.log('Error! Media - find(): ', err);
    });
};

exports.create = function(req, res) {
  Media
    .create(req.body)
    .then(function(media) {
      console.log('Media - create(): ', media);
      res.json(201, media);
    })
    .catch(function(err) {
      console.log('Error! Media - create(): ', err);
    });
};

exports.update = function(req, res) {
  
};

exports.destroy = function(req, res) {

};