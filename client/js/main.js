

// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function grabs an id from a url submitted by a user.
var getID = function(){
  var url = $('#url').val();
  console.log(url);
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  var id = (url.match(p)) ? RegExp.$1 : false ;
  displayVideo(id);
}

//3. This code creates a video iframe element from an id.
var player;
var displayVideo = function (id) {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: id,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    getTime();
  } else if (event.data = YT.PlayerState.ENDED){
    clearInterval(getTime);
  }
}

// 6. This function gets the time of the video on a regular interval, rounds it down to the nearest second, then queries JSON.
var getTime = setInterval(function(){
  var currentTime = Math.floor(player.getCurrentTime());
  queryData(currentTime);
}, 1000);

// 7. This function queries JSON for an event at a specific time and logs them.
var queryData = function(time){
  if(jsonData.events[time] !== undefined){
    console.log(jsonData.events[time]);
  }
}

// 8. This is our JSON events data.
var jsonData = {"events": [undefined, "hey Brant", undefined, undefined, undefined, "hey Johnny", undefined, undefined, undefined, undefined, "hey Chalie"]};
