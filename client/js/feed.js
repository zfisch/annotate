$(function(){
  $('.container').isotope({
    itemSelector: '.item',
    layoutModde: 'fitRows'
  });
});

var append = function(html){
  console.log(html);
  var $container = $('.container');
  var $item = $(html);

  $container.prepend( $item )
    .isotope( 'prepended', $item );
};

var pop = function(){
  var $container = $('.container');
  var $item = $('.item')[0];
 
  $container.isotope( 'remove', $item )
    .isotope('layout');
};