//This function gets the time of the video on a regular interval, rounds it down to the nearest second.
var currentVideoTime = player.getCurrentTime();
var getTime = setInterval(function(){
  currentVideoTime = Math.floor(player.getCurrentTime());
  if(obj.video.annotations[currentVideoTime]){
    append(obj.video.annotations[currentVideoTime]);
  }
}, 1000);

<<<<<<< HEAD
=======



>>>>>>> master
