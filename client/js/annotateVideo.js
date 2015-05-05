//on first input submit, create an object with video id, name, and annotations
var videoObj = null;

var createObj = function(){
  videoObj = {
    "video": {
      "id": id,
      "name": null,
      "annotations": {
      }
    }
  }
};

var annotate = function(input){
  if(videoObj === null){
    createObj();
  }
  var annotationTime = Math.floor(player.getCurrentTime());
  videoObj.video.annotations[annotationTime] = input;
};

var setName = function(name){
  if(videoObj === null){
    createObj();
  }
  videoObj.video.name = name;
}