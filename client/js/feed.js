$(function(){
  $('.feed').isotope({
    itemSelector: '.feed-item',
    layoutModde: 'fitRows'
  });
});

var append = function(html, time){
  var $container = $('.feed');
  var $item = $('<div class="feed-item"><span class="time">'+ time +'</span>' + html + '</div>');

  $container.prepend( $item )
    .isotope( 'prepended', $item );
};

var pop = function(){
  var $container = $('.feed');
  var $item = $('.item')[0];
 
  $container.isotope( 'remove', $item )
    .isotope('layout');
};