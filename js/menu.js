function hideNav(){
  if ($('.main-nav').hasClass('hidden')){
    $('.main-nav').css('visibility', 'hidden');
  } else {
    $('.main-nav').css('visibility', 'visible');
  }
};

collapseNav();

$('.hamburger').on('click', function(e){
  e.preventDefault();
  $('.main-nav').toggleClass('hidden');
  collapseNav();
});
