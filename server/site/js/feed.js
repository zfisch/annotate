// 
// Manages the adding and removing of feed items along with the creation of the feed layout
// 

$(function(){
  $('.feed').isotope({
    itemSelector: '.feed-item',
    layoutModde: 'fitRows'
  });

  $('.feed').on('click', '.time', function(e){
    e.preventDefault();
    player.seekTo(this.text);
  });
});

var append = function(html, time){
  var $container = $('.feed');
  var $item = $('<div class="feed-item"><a class="time">'+ time +'</a>' + html + '</div>');

  $container.prepend( $item )
    .isotope( 'prepended', $item );
};

var pop = function(){
  var $container = $('.feed');
  var $item = $('.item')[0];
 
  $container.isotope( 'remove', $item )
    .isotope('layout');
};