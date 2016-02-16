(function(module){
  var projectController = {};

  projectController.index = function(ctx){
    projectView.initIndexPage(ctx.projects);
    menu.handleNav();
    $('main > section').hide();
    $('footer').show();
    $('#projects').show();
    $('.tab-landing').show();
  };

  projectController.getData = function(ctx, next){
    var projectData = Project.fetchAll(function(projectData){
      ctx.projects = projectData;
      next();
    });
  };

  module.projectController = projectController;

})(window);
