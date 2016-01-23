//add any styles related to hidden/hide to state.css; also can project summary and nav use the same is-hidden class

//nav menu function
function hideNav(){
  if ($('.main-nav').hasClass('hidden')){
    $('.main-nav').css('visibility', 'hidden');
  } else {
    $('.main-nav').css('visibility', 'visible');
  }
};

//hideNav();

$('.hamburger').on('click', function(e){
  e.preventDefault();
  $('.main-nav').toggleClass('hidden');
  collapseNav();
});

//dynamic class removal for desktop layout
var dynamicGrid = $(window).resize(function(){
  var width = $(window).width();
  if (width >= 768){
    $('.project').removeClass('twelve').addClass('six');
    $('.container:nth-child(2)').removeClass('row');
  }
});
