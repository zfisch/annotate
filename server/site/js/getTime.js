//This function gets the time of the video on a regular interval, rounds it down to the nearest second.
var currentVideoTime = 0;
var intervalID;
var getTime = function() {
  intervalID = setInterval(function() {
    currentVideoTime = Math.floor(player.getCurrentTime());
    if(obj.video.annotations[currentVideoTime]){
      append(obj.video.annotations[currentVideoTime], currentVideoTime);
    }
  }, 1000);
};

