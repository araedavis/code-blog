var projectView = {};

projectView.handleTabs = function(){
  $('#about').hide();

  $('.tab').on('click','a', function(){
    $('section').hide();
    var tabId = $(this).data('tab');
    $('#' + tabId).show();

  });
};

$(function(){
  projectView.handleTabs();
});


//next up: create filters/categories for projects: ie, javascript, writing, marketing, etc.

//next up: create dropdown menus for filtering projects

//next up: finish responsive nav

//next up: create media queries for grid layout
