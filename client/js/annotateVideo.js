//on first input submit, create an object with video id, name, and annotations
var videoObj = null;

var createObj = function(){
  videoObj = {
    "video": {
      "id": id,
      "name": "SpoonGuitar",
      "annotations": {
      }
    }
  }
};

var annotate = function(input){
  if(videoObj === null){
    createObj();
  }
  var annotationTime = player.getCurrentTime();
  videoObj.video.annotations[annotationTime] = input;
};