//add YOUTUBE api tag to page async
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//add video to page from url
var id = null;
var player;
var displayVideo = function(url){
  id = getVideoId(url);
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: id,
  });
}

//get video id from url
var getVideoId = function(url){
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(p)) ? RegExp.$1 : false ;
}