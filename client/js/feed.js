$(function(){
  $('.container').isotope({
    itemSelector: '.item',
    layoutModde: 'fitRows'
  });
});

var append = function(html){
  var $container = $('.container');
  var $item = $(JSON.parse(html));

  $container.prepend( $item )
    .isotope( 'prepended', $item );
};

var pop = function(){
  var $container = $('.container');
  var $item = $('.item')[0];
 
  $container.isotope( 'remove', $item )
    .isotope('layout');
};