
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
//pushes each rawProject object to projects arr as a new Project object
  rawProjects.forEach(function(el){
    Project.all.push(new Project(el));
  });

  Project.all.forEach(function(pro){
    $('.row').append(pro.toHtml());
  });
};

Project.fetchAll = function(){
  if(localStorage.rawProjects){
    
    Project.loadAll(JSON.parse(localStorage.rawProjects));
  } else {
    $.get('data/projects.json', function(data){
      Project.loadAll(data);
      var dataString = JSON.stringify(data);
      localStorage.setItem('rawProjects', dataString);
    });
  }
};
