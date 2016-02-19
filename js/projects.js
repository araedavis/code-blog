
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

  Project.all = [];

//TODO move this method to view
  // Project.prototype.toHtml = function(){
  //   var source = $('#projectTemplate').html();
  //   var template = Handlebars.compile(source);
  //
  //   var context = {
  //     title: this.title,
  //     subtitle: this.subtitle,
  //     summary: this.summary,
  //     img: this.img,
  //     projectUrl: this.projectUrl,
  //     category: this.category
  //   };
  //
  //   var html = template(context);
  //   return html;
  // };

//DONE:removing html population from this method because it's also view-ish
  Project.loadAll = function(rawProjects){
    Project.all = rawProjects.map(function(el){
      return new Project(el);
    });
  };

  Project.fetchAll = function(callback){
    function ajaxReq(){
      $.ajax({
        url: 'data/projects.json',
        success: function(data, message, xhr){
          Project.loadAll(data);

          var dataString = JSON.stringify(data);
          localStorage.setItem('rawProjects', dataString);
          localStorage.setItem('ETag', xhr.getResponseHeader('ETag'));
          callback(Project.all);
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
      callback(Project.all);
    } else {
      //else ajax!
      ajaxReq();
    }
  };

  Project.findWhere = function(property, value, callback){
    return Project.all.map(function(project){
      if(project.property === value){
        return project;
      };
    });
  };

  Project.getCategories = function(){
    return Project.all.map(function(project){
      return project.category;
    })
      .reduce(function(catArr, cat){
        if(catArr.indexOf(cat) === -1){
          catArr.push(cat);
        }
        return catArr;
      }, []);
  };

  module.Project = Project;
})(window);
