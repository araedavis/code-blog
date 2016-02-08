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

  //TODO: sort repos by last push date
  repoView.sortRepos = function(){

  };

  //TODO: format date strings
  repoView.dateFormat = function(){

  };

  repoView.index = function(){
    prepUi();
    repoView.sortRepos();


    $('.repos ul').append(
      repo.all.map(render)
    );
    //TODO appends last updated date (should this be the last push date instead?)
    $('.git-updated').append('<p>Last GitHub update: ' + repo.profileUpdated + '</p>');
  };

  module.repoView = repoView;

})(window);
