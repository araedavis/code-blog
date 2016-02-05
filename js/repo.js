(function(module){
  var repo = {};

  repo.all = [];

  repo.fetch = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/araedavis/repos',
      type: 'GET',
      headers: { 'Authorization': + 'token ' + githubToken },
      success: function(data){
        repo.all = data;
        console.log(repo.all);
        callback();
      }
    });


  };

  module.repo = repo;

})(window);
