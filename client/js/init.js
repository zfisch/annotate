var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Get hardcorded video json object for testing.
//TODO: Use a URL from an annotated video link to query the db..
var obj;
$.ajax({
  url: 'js/hard-data.json',
  type: 'GET',
  success: function(data){
    obj = data;
  }
});

//Display a video based on the object returned from the DB in GET req.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '450',
    width: '790',
    videoId: obj.video.id,
    playerVars: { 
      'showinfo': 0,
      'hd': 1,
      'autohide': 1 
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

//Listener for player state changes. Calls getTime every second only if vid is playing.
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    getTime();
  } else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.BUFFERING){
    clearInterval(getTime);
  }
}
