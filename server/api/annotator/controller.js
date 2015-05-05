var Annotator = require('./model');

exports.index = function(req, res) {
  console.log('===========:', Annotator);

  Annotator
    .findAll()
    .then(function(annotators) {
      console.log('Success! Annotator - findAll(): ', annotators);
      res.json(200, annotators);
    })
    .error(function(err) {
      console.log('Error! Annotator - findAll(): ', err);
    });
};

exports.show = function(req, res) {
  Annotator
    .find(req.body.annotatorId)
    // .find(req.params.annotatorId) // or via annotator ID in param
    .then(function(annotator) {
      console.log('Success! Annotator - find(): ', annotator);
      res.json(200, annotator);
    })
    .error(function(err) {
      console.log('Error! Annotator - find(): ', err);
    });
};

exports.create = function(req, res) {
  Annotator
    .find({username: req.body.username})
    .success(function(annotator) {
      if (!annotator) {
        Annotator
          .create(req.body)
          .success(function(annotator, created) {
            console.log('Success! Annotator - create(): ', annotator);
            res.json(201, annotator);
          })
          .error(function(err) {
            console.log('Error! Annotator - create(): ', err);
          });
      } else {
        res.json(409, 'user already exists');
      }
    })
    .error(function(err) {
      console.log('Error! Annotator - find(): ', err);
    });
};

exports.update = function(req, res) {

};

exports.destroy = function(req, res) {

};