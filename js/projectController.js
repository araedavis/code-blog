(function(module){
  var projectController = {};

  projectController.index = function(){
    Project.fetchAll(projectView.initIndexPage());
    $('main > section').hide();
    $('footer').show();
    $('#projects').show();
  };

  module.projectController = projectController;

})(window);
