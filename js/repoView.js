(function(module){
  var repoView = {};

//store repos node in a var; target the ul and empty it
  var prepUi = function(){
    var $repos = $('.repos');
    $repos.find('ul').empty();
  };

  var formatDate = function(repo){
    return new Date(repo.updated_at);
  };


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
    //appends most recent code push date
    var lastUpdate = formatDate(repo.all[0]);
    console.log(lastUpdate.toDateString());
    $('.git-updated').append('<p>Last GitHub push: ' + lastUpdate.toDateString() + '</p>');
  };

  module.repoView = repoView;

})(window);
