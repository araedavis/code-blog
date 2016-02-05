(function(module){
  var aboutController = {};

  aboutController.index = function(){
    projectView.initIndexPage();
    repo.fetch(repoView.index);

    repo.fetchProfile();
    $('main > section').hide();
    $('footer').show();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
