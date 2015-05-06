//on first input submit, create an object with video id, name, and annotations
var videoObj = null;

var createObj = function(id){
  videoObj = {
    "video": {
      "videoId": id,
      "name": null,
      "annotations": {
      }
    }
  }
};

var annotate = function(input){
  if(videoObj === null){
    return alert("Please upload a video first!");
  }
  var annotationTime = Math.floor(player.getCurrentTime());
  videoObj.video.annotations[annotationTime] = input;
};

var setName = function(name){
  if(videoObj === null){
    return alert("Please upload a video first!");
  }
  videoObj.video.name = name;
}

//TODO: fix this post to DB
var saveVid = function(videoObj){
 $.ajax({
   url: 'api/users/0/media/0',
   type: 'POST',
   data: videoObj,
   success: function(data){
      //they send back obj with media ID
   }
 });
}
