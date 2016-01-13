var projects = [];

//create a constructor function for project objects

function Project(opts){
  this.title = opts.title;
  this.subtitle = opts.subtitle;
  this.summary = opts.summary;
  this.img = opts.img;
  this.projectUrl = opts.projectUrl;
  this.dateCreated = opts.dateCreated;
}

Project.prototype.toHtml = function(){
  var source = $('#projectTemplate').html();
  var template = Handlebars.compile(source);

  var context = {
    title: this.title,
    subtitle: this.subtitle,
    summary: this.summary,
    img: this.img,
    projectUrl: this.projectUrl
  };

  var html = template(context);
  return html;
};

//pushes each rawProject object to projects arr as a new Project object
rawProjects.forEach(function(el){
  projects.push(new Project(el));

});

projects.forEach(function(pro){
  $('#projects').append(pro.toHtml());
});
