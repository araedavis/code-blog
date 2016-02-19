(function(module){
  var repoView = {};

//store repos node in a var; target the ul and empty it
  var prepUi = function(){
    var $repos = $('.repos');
    $repos.find('ul').empty();
  };

//returns a date object instead of a string
  var formatDate = function(repo){
    return new Date(repo.pushed_at);
  };

//renders html for repo ul
  var render = function(repo){
    return '<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>';
  };

//sort repos by most recent date
  var sortRepos = function(array){
    return array.sort(function(a,b){
      return (new Date(a.pushed_at) - new Date(b.pushed_at));
    })
    .reverse();
  };

  repoView.index = function(repositories){
    prepUi();
    //appends sorted repos
    $('.repos ul').append(
      sortRepos(repositories).map(render)
    );

    //appends most recent code push date
    var lastUpdate = formatDate(repositories[0]);
    $('.git-updated').html('<h3>Last GitHub push<br> ' + lastUpdate.toDateString() + '</h3>');
  };

  module.repoView = repoView;

})(window);
