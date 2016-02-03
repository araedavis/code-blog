
//create a constructor function for project objects
(function(module) {
  function Project(opts){
    this.title = opts.title;
    this.subtitle = opts.subtitle;
    this.summary = opts.summary;
    this.img = opts.img;
    this.projectUrl = opts.projectUrl;
    this.dateCreated = opts.dateCreated;
    this.category = opts.category;
  }



  Project.prototype.toHtml = function(){
    var source = $('#projectTemplate').html();
    var template = Handlebars.compile(source);

    var context = {
      title: this.title,
      subtitle: this.subtitle,
      summary: this.summary,
      img: this.img,
      projectUrl: this.projectUrl,
      category: this.category
    };

    var html = template(context);
    return html;
  };

  Project.loadAll = function(rawProjects){
  //pushes each rawProject object to Project.all
    rawProjects.map(function(el){
      return new Project(el);
    })
    //renders each project using toHtml method
    .forEach(function(pro){
      $('.project-container').append(pro.toHtml());
    });
  };

  Project.fetchAll = function(callback){
    function ajaxReq(){
      $.ajax({
        url: 'data/projects.json',
        success: function(data, message, xhr){
          console.log(data, message, xhr);

          Project.loadAll(data);
          var dataString = JSON.stringify(data);
          localStorage.setItem('rawProjects', dataString);
          localStorage.setItem('ETag', xhr.getResponseHeader('ETag'));

        },
      });
    }
    //if project data exists in local storage
    if(localStorage.rawProjects){
      //find the ETag
      $.ajax({
        type: 'HEAD',
        url: 'data/projects.json',
        ifModified: true,
        success: function(data, message, xhr){
          if(localStorage.ETag !== xhr.getResponseHeader('ETag')){
            console.log(xhr.getResponseHeader('ETag'));
            //if etag doesn't match mini req, new ajax req
            ajaxReq();
          };
        }
      });
      //if etags are equal, load project data from local storage
      console.log('local storage');
      Project.loadAll(JSON.parse(localStorage.rawProjects));
    } else {
      //else ajax!
      ajaxReq();
    }
    callback;
  };

  module.Project = Project;
})(window);
