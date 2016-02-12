(function(module){
  var repo = {};

  //repo.all = [];
  //repo.updated = '';

  repo.fetch = function(callback){
    $.ajax({
      url: 'github/users/araedavis/repos',
      type: 'GET',
      //error: function(xhr){
      //   console.log(xhr);
      // },
      success: function(data, status, xhr){
        //repo.all = data;
        callback(data);
      }
    });
  };

  module.repo = repo;

})(window);
