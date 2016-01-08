var projects = [];

//create a constructor function for project objects

function Project(prop){
  this.title = prop.title;
  this.subtitle = prop.subtitle;
  this.summary = prop.summary;
  this.img = prop.img;
  this.projectUrl = prop.projectUrl;
  this.dateCreated = prop.dateCreated;
}

//create a method to render the projects on the page
Project.prototype.toHtml = function(){
  //clone the project div
  var $newProject = $('.project').clone();

  //find each element of clone, populate with the property to be placed there
  $newProject.find('h1').html(this.title);

};

//push data to projects array

//add

//Next up: contain projects in a carousel or other slightly more interactive display
