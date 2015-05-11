//This function gets the time of the video on a regular interval, rounds it down to the nearest second.
var currentVideoTime = 0;
var intervalID;
var getTime = function() {
  intervalID = setInterval(function() {
    currentVideoTime = Math.floor(player.getCurrentTime());
    if(obj.annotations[currentVideoTime]){
      append(obj.annotations[currentVideoTime], currentVideoTime);
    }
  }, 1000);
};

