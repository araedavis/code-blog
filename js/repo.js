(function(module){
  var repo = {};

  repo.all = [];

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
        callback();
      }
    });


  };

  module.repo = repo;

})(window);
