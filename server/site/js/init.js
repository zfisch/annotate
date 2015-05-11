var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Get hardcorded video json object for testing.
//TODO: Use a URL from an annotated video link to query the db..
var obj;
$.ajax({
  url: '/api/users/1/media/1',
  type: 'GET',
  success: function(data){
    obj = data;
  }
});

//Display a video based on the object returned from the DB in GET req.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '458',
    width: '906',
    videoId: obj.video_id,
    playerVars: { 
      'showinfo': 0, //hides title + other garbage for cleaner look
      'hd': 1, //uses HD version if available
      'autohide': 1, //autohides the controls when video starts playing
      'rel': 0, //turns off related vidoes
      'iv_load_policy': 3 //this turns off the youtube annotations
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
    clearInterval(intervalID);
  }
}
