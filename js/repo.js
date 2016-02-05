(function(module){
  var repo = {};

  repo.all = [];
  repo.updated = '';

  repo.fetch = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/araedavis/repos',
      type: 'GET',
      //error: function(xhr){
      //   console.log(xhr);
      // },
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, status, xhr){
        repo.all = data;
        console.log(repo.all);
        callback();
      }
    });

    repo.fetchProfile = function(callback){
      $.ajax({
        url: 'https://api.github.com/users/araedavis',
        type: 'GET',
        headers: { 'Authorization': 'token ' + githubToken },
        success: function(data, status, xhr){
          repo.updated = data.updated_at;
          callback();
        }
      });
    };

  };

  module.repo = repo;

})(window);
