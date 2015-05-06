//on first input submit, create an object with video id, name, and annotations
var videoObj = null;

//gets called when video is chosen by the user
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

//create an annotation at a given time
var annotate = function(input){
  if(videoObj === null){
    return alert("Please upload a video first!");
  }
  var annotationTime = Math.floor(player.getCurrentTime());
  videoObj.video.annotations[annotationTime] = input;
};

//choose a name for the annotated video project
var setName = function(name){
  if(videoObj === null){
    return alert("Please upload a video first!");
  }
  videoObj.video.name = name;
}

//Sends videoObj to db.
//TODO: test structuring of POST request on db. 
var saveVid = function(){
 $.ajax({
    url: 'api/users/0/media/0',
    type: 'POST',
    data: videoObj,
    success: function(data){
      //TODO: expecting some sort of data to structure a url for sharing the saved annotated video
    }
 });
}
