(function(module){
  var aboutController = {};

  aboutController.index = function(){
    projectView.initIndexPage();
    $('main > section').hide();
    $('footer').show();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
