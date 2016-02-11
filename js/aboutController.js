(function(module){
  var aboutController = {};

  aboutController.index = function(){
    projectView.initIndexPage();
    repo.fetch(repoView.index);

    $('main > section').hide();
    $('footer').show();
    $('#about').show();
    $('.tab-landing').show();
  };

  module.aboutController = aboutController;
})(window);
