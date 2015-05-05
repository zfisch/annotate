var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Hardcorded video json object for testing.
var obj;
$.ajax({
  url: 'js/hard-data.json',
  type: 'GET',
  success: function(data){
    obj = data;
  }
});

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
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    getTime();
  } else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED){
    clearInterval(getTime);
  }
}
