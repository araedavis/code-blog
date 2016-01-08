var projects = [];

//create a constructor function for project objects

function Project(opts){
  this.title = opts.title;
}

Project.prototype.toHtml = function(){
  var $newProject = $('.project').clone();

  //find each element of clone, populate with the property to be placed there
  $newProject.find('h1').html(this.title);

  return $newProject;

};

console.log(rawProjects);
rawProjects.forEach(function(el){
  projects.push(new Project(el));

});

console.log(projects);

//Next up: basic css styles for #projects
//Next up: contain projects in a carousel or other slightly more interactive display
