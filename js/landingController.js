(function(module){
  var landingController = {};

  landingController.index = function(){
    projectView.initIndexPage();
    $('main > section').hide();
    $('#landing').show();

  };

  module.landingController = landingController;
})(window);
