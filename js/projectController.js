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

  projectController.loadByCategory = function(ctx, next){
    var categoryData = function(projectsInCategory){
      ctx.projects = projectsInCategory;
      next();
    };
    Project.findWhere('category', ctx.params.categoryName, categoryData);
  };

  module.projectController = projectController;

})(window);
