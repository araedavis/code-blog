(function(module){
  //create a constructor function for project objects
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

  Project.prototype.toHtml = function(){

<<<<<<< HEAD
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

  Project.prototype.toHtml = function(){
    var source = $('#projectTemplate').html();
    var template = Handlebars.compile(source);
=======
    var template = Handlebars.compile($('#projectTemplate').text());
>>>>>>> class07

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
    rawProjects.forEach(function(el){
      Project.all.push(new Project(el));
    });

  //renders each project using toHtml method
    Project.all.forEach(function(pro){
      $('.project-container').append(pro.toHtml());
    });
  };

<<<<<<< HEAD
  Project.fetchAll = function(callback){
=======
  Project.fetchAll = function(){
>>>>>>> class07
    //if project data exists in local storage
    if(localStorage.rawProjects){
      Project.loadAll(JSON.parse(localStorage.rawProjects));
    } else {
      //else ajax!
      $.get('data/projects.json', function(data){
        Project.loadAll(data);
        var dataString = JSON.stringify(data);
        localStorage.setItem('rawProjects', dataString);
      });
    }
<<<<<<< HEAD
    callback;
  };
=======
  };

>>>>>>> class07
  module.Project = Project;
})(window);
