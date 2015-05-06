//This function gets the time of the video on a regular interval, rounds it down to the nearest second.
var currentVideoTime = 0;
var getTime = function() {
    setInterval(function() {
    currentVideoTime = Math.floor(player.getCurrentTime());
    if(obj.video.annotations[currentVideoTime]){
      append(obj.video.annotations[currentVideoTime], secondsToString(currentVideoTime));
    }
  }, 1000);
};

function secondsToString(seconds) {
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  return numminutes + ':' + numseconds;
}

