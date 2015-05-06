/**
 * Because Media and Annotation have a one to one relationship,
 * we are putting annotation directly on the Media model for 
 * fast ramp up. Uncomment the code below to create a separate
 * annotation table.
 */

// var Annotation = require('./model');

// exports.index = function(req, res) {
//   Annotation
//     .findAll()
//     .then(function(annotations) {
//       console.log('Success! Annotation - findAll(): ', annotations);
//       res.json(200, annotations);
//     })
//     .catch(function() {
//       console.log('Error! Annotation - findAll(): ', err);
//     });
// };

// exports.show = function(req, res) {
//   Annotation
//     .find(req.body.annotationId)
//     // .find(req.params.annotationId) // or via annotation ID in param
//     .then(function(annotation) {
//       console.log('Success! Annotation - find(): ', annotation);
//       res.json(200, annotations);
//     }) 
//     .catch(function(err) {
//       console.log('Error! Annotation - find(): ', err);
//     });
// };

// exports.create = function(req, res) {
//   Annotation
//     .create({mediaId: req.body.mediaId})
//     .then(function(annotation) {
//       console.log('Success! Annotation - create(): ', annotation);
//       res.json(201, annotation);
//     })
//     .catch(function(err) {
//        console.log('Error! Annotation - create(): ', err);
//     });
// };

// exports.update = function(req, res) {
//   Annotation
//     .find({where: {id: req.body.annotationId}})
//     .then(function(annotation) {
//       annotation.update({notes: req.body.notes})
//         .then(function(annotation) {
//           console.log('Success! Annotation - update(): ', annotation);
//         })
//         .catch(function(err) {
//           console.log('Error! Annotation - update(): ', error);
//         });
//     })
//     .catch(function(err) {
//       console.log('Error! Annotation - find(): ', error);
//     });
// };

// exports.destroy = function(req, res) {

// };