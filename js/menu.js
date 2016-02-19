(function(module){
  var menu = {};

  menu.handleNav = function(){
    $('.hamburger').off('click');

    $('.hamburger').on('click', function(e){
      e.preventDefault();
      $('.main-nav').slideToggle('600', function(){
        $('.hamburger > i').toggleClass('fa-times fa-bars');
      });
    });

    $(window).on('resize', function(){
      if($(window).width() >= 768){
        $('.main-nav').show();
      } else if($(window).width() < 768){
        $('.main-nav').hide();
      };
    });
  };

  module.menu = menu;

})(window);
