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
  var $newProject = $('.template').clone();

  //find each element of clone, populate with the property to be placed there
  $newProject.find('h1').html(this.title);
  $newProject.find('h3').html(this.subtitle);
  $newProject.find('p').html(this.summary);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('.project-img').attr('src', this.img);

  $newProject.removeClass('template');

  return $newProject;

};

//pushes each rawProject object to projects arr as a new Project object

rawProjects.forEach(function(el){
  projects.push(new Project(el));

});

projects.forEach(function(pro){
  $('#projects').append(pro.toHtml());
});

//Next up: basic css styles for #projects
//Next up: contain projects in a carousel or other slightly more interactive display
