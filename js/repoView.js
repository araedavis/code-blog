(function(module){
  var repoView = {};

//store repos node in a var; target the ul and empty it
  var prepUi = function(){
    var $repos = $('.repos');
    $repos.find('ul').empty();
  };

  // var formatDate = function(repo){
  //   repo.updated_at = new Date(repo.updated_at);
  //   return repo;
  // };


  var render = function(repo){
    return '<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>';
  };

  repoView.index = function(){
    prepUi();

    $('.repos ul').append(
      repo.all.sort(function(a,b){
        return (new Date(a.updated_at) - new Date(b.updated_at));
      })
      .reverse()
      .map(render)
    );
    //TODO appends last updated date (should this be the last push date instead?)
    //$('.git-updated').append('<p>Last GitHub update: ' + Something else goes here + '</p>');
  };

  module.repoView = repoView;

})(window);
