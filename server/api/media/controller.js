var Media = require('./model');

exports.index = function(req, res) {
  console.log(Media);

  Media
    .findAll()
    .then(function(media) {
      console.log('Success! Media - findAll(): ', media);
      res.status(200).json(media);
    })
    .catch(function(err) {
      console.log('Error! Media - findAll(): ', err);
    });
};

exports.show = function(req, res) {
  Media
    // .find(req.body.mediaId) // find by body params 
    .find({where: {media_id: req.params.mediaId }}) // find by mediaId in url params
    .then(function(media) {
      console.log('Media - find(): ', media);
      res.status(200).json(media);
    })
    .catch(function(err) {
      console.log('Error! Media - find(): ', err);
    });
};

exports.create = function(req, res) {
  console.log('request body: ', req.params)
  Media
    .create(req.body)
    .then(function(media) {
      console.log('Media - create(): ', media);
      res.status(201).json(media);
    })
    .catch(function(err) {
      console.log('Error! Media - create(): ', err);
    });
};

exports.update = function(req, res) {
  
};

exports.destroy = function(req, res) {

};