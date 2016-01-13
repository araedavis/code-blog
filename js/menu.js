function collapseNav(){
  if ($('.main-nav').hasClass('collapsed')){
    $('.main-nav').hide();
  } else {
    $('.main-nav').show();
  }
};

collapseNav();

$('.hamburger').on('click', function(e){
  e.preventDefault();
  $('.main-nav').toggleClass('collapsed');
  collapseNav();
});
