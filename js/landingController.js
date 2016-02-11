(function(module){
  var landingController = {};

  landingController.index = function(){
    projectView.initIndexPage();
    $('main > section').hide();
    $('footer').hide();
    $('#landing').show();

    $('.tab-landing').hide();
  };

  module.landingController = landingController;
})(window);
