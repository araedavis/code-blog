(function(module){
  var repo = {};

  repo.all = [];

  repo.fetch = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/araedavis/repos', //+ '?callback=callback&access_token=' + githubToken,
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


  };

  module.repo = repo;

})(window);
