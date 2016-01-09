$(function(){
  //hide .main-nav
  $('.main-nav').hide(); //this will change to an addClass()

  $('.hamburger').on('click', function(e){
    e.preventDefault();
    $('.main-nav').show();
  });
  //next up: rehide when menu icon is reclicked (using show/hide class?)

});
