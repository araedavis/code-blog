$(function(){

  $('.main-nav').hide();

  $('.hamburger').on('click', function(e){
    e.preventDefault();
    $('.main-nav').toggleClass('open');

    if ($('.main-nav').hasClass('open')){
      $('.main-nav').show();
    } else {
      $('.main-nav').hide();
    }
  });

  

});
