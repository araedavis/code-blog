(function(module){
  var aboutController = {};

  aboutController.index = function(){
    projectView.initIndexPage();
    $('main > section').hide();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
