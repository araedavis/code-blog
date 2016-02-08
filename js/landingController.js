(function(module){
  var landingController = {};

  landingController.index = function(){
    projectView.initIndexPage();
    $('main > section').hide();
    $('footer').hide();
    $('#landing').show();

  };

  module.landingController = landingController;
})(window);
