(function(module){
  var repoView = {};

//store repos node in a var; target the ul and empty it
  var prepUi = function(){
    var $repos = $('.repos');
    $repos.find('ul').empty();
  };

  var render = function(repo){
    return '<li>' + repo.name + '</li>';
  };

  repoView.index = function(){
    prepUi();
    $('.repos ul').append(
      repo.all.map(render)
    );    
  };

  module.repoView = repoView;

})(window);
