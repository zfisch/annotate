var Annotation = require('./model');

exports.index = function(req, res) {
  Annotation
    .findAll()
    .success(function(annotations) {
      console.log('Success! Annotation - findAll(): ', annotations);
      res.json(200, annotations);
    })
    .error(function() {
      console.log('Error! Annotation - findAll(): ', err);
    });
};

exports.show = function(req, res) {
  Annotation
    .find(req.body.annotationId)
    // .find(req.params.annotationId) // or via annotation ID in param
    .success(function(annotation) {
      console.log('Success! Annotation - find(): ', annotation);
      res.json(200, annotations);
    }) 
    .error(function(err) {
      console.log('Error! Annotation - find(): ', err);
    });
};

exports.create = function(req, res) {
  Annotation
    .create({mediaId: req.body.mediaId})
    .success(function(annotation) {
      console.log('Success! Annotation - create(): ', annotation)
      res.json(201, annotation);
    })
    .error(function(err) {
       console.log('Error! Annotation - create(): ', err);
    });
};

exports.update = function(req, res) {
  Annotation
    .find({where: {id: req.body.annotationId}})
    .success(function(annotation) {
      annotation.update({notes: req.body.notes})
        .success(function(annotation) {
          console.log('Success! Annotation - update(): ', annotation)
        })
        .error(function(err) {
          console.log('Error! Annotation - update(): ', error)
        });
    })
    .error(function(err) {
      console.log('Error! Annotation - find(): ', error)
    });
};

exports.destroy = function(req, res) {

};