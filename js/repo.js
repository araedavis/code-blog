(function(module){
  var repo = {};

  repo.all = [];
  repo.updated = '';

  repo.fetch = function(callback){
    $.ajax({
      url: 'github/users/araedavis/repos',
      type: 'GET',
      //error: function(xhr){
      //   console.log(xhr);
      // },
      success: function(data, status, xhr){
        console.log(data);
        repo.all = data;
        callback();
      }
    });
  };

  module.repo = repo;

})(window);
