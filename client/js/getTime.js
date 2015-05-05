//Get video for player.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: obj.video.id,
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

//Listener for player state changes. Calls getTime every second.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    getTime();
  } else if (event.data = YT.PlayerState.ENDED){
    //TODO: add handling for player paused.
    done = true;
    clearInterval(getTime);
  }
}

//This function gets the time of the video on a regular interval, rounds it down to the nearest second.
var currentVideoTime = 0;
var getTime = setInterval(function(){
  currentVideoTime = Math.floor(player.getCurrentTime());
  if(obj.video.annotations[currentVideoTime]){
    append(obj.video.annotations[currentVideoTime]);
  }
}, 1000);

//Hardcorded video json object for testing.
var obj = {video: {
  id: 'NCKTeRW3OhQ',
  name: 'Spoon Guitar',
  annotations: {
    13: "<div>SIIIIIICK</div>",
    27: "<div>FUCK YEA</div>",
    67: "<div>alright, man! sweet spoon</div>",
  }
}}





