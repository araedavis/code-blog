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
        console.log(data);
        repo.all = data;
        callback();
      }
    });
  };

  module.repo = repo;

})(window);
