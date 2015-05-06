var config = require('../config/db');
var User = require('./user/model');
var Media = require('./media/model');
// var Annotation = require('./annotation/model');

exports.showAnnotation = function(req, res) {
  
  User
    .findAll({
    	where: {
  		  username:'johnny'
  	    },
  	    include:[
  	      {model:Media},
  	    ]
  	})
    .then( function(users) {
      
      var video_id = users[0]['Media'][0]['media_id'];
      var name = users[0]['Media'][0]['name'];
      var annotation = users[0]['Media'][0]['notes'];

      var result = {
      	video:{
      	  id: video_id,
      	  name: name,
      	  annotation: annotation
      	}
      }
      // var data = annotators[0].dataValues.Media[0];
      // var result3 = annotators[0].dataValues;
      // result = { video : {
      // 	id: data.
      // 	+ "," + result2 + "," + result3};
  	  res.json(200, result);
    });

  // var result = Annotator.findAll({
  // 	where: {
  // 		username:'johnny'
  // 	}
  // });

  // console.log('result', result);
  // res.end("END");
  // Annotator.getMedia({ 
  // 	where:{
  // 	  media_id : 1
  //   }
  // }).then(function(annotators) {
  // 	  res.json(200, annotators);
  //   });
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