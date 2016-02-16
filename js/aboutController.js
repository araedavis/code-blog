(function(module){
  var aboutController = {};

  aboutController.index = function(ctx){
    menu.handleNav();
    repoView.index(ctx.repositories);

    $('main > section').hide();
    $('footer').show();
    $('#about').show();
    $('.tab-landing').show();
  };

  aboutController.getData = function(ctx, next){
    var repoData = repo.fetch(function(repoData) {
      ctx.repositories = repoData;
      next();
    });
  };

  module.aboutController = aboutController;
})(window);
