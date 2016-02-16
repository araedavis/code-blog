(function(module){
  var landingController = {};

  landingController.index = function(){
    menu.handleNav();
    $('main > section').hide();
    $('footer').hide();
    $('#landing').show();

    $('.tab-landing').hide();
  };

  module.landingController = landingController;
})(window);
