//adds YOUTUBE api tag to page asyncronously
//this is functionally similar to including a script tag in the html
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Display a video on the page from url
var id = null;
var player;
var displayVideo = function(url){
  id = getVideoId(url);
  createObj(id);
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: id,
  });
}

//Parse a video ID from a url for getting vid from youtube API
var getVideoId = function(url){
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(p)) ? RegExp.$1 : false ;
}