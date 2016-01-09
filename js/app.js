var projects = [];

//create a constructor function for project objects

function Project(opts){
  this.title = opts.title;
}

Project.prototype.toHtml = function(){
  var $newProject = $('.project').clone();

  //find each element of clone, populate with the property to be placed there
  $newProject.find('h1').html(this.title);
  //add additional elements & properties here

  return $newProject;

};

//pushes each rawProject object to projects arr as a new Project object

// rawProjects.forEach(function(el){
//   projects.push(new Project(el));
//
// });
//
// console.log(projects);
//
// projects.forEach(function(pro){
//   $('#projects').append(pro.toHtml());
// });

//Next up: basic css styles for #projects
//Next up: contain projects in a carousel or other slightly more interactive display
