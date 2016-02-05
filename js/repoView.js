(function(module){
  var repoView = {};

//store repos node in a var; target the ul and empty it
  var prepUi = function(){
    var $repos = $('.repos');
    $repos.find('ul').empty();
  };

  var render = function(repo){
    return '<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>';
  };

  repoView.index = function(){
    prepUi();
    console.log(repo.updated);
    $('.repos ul').append(
      repo.all.map(render)
    );
    $('.git-updated').html(repo.updated);
  };

  module.repoView = repoView;

})(window);
