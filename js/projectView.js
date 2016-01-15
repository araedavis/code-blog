var projectView = {};

//TODO: create filters/categories for projects: ie, javascript, writing, marketing, etc.
projectView.populateCategoryFilter = function(){
  var filterVal = [];
  $('.project').each(function(){
    var val = $(this).attr('data-category');
    filterVal.push(val);

    filterVal = $.unique(filterVal);
    return filterVal;
  });

  $(filterVal).each(function(num, val){
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#category-filter').append(optionTag);
  });

};


projectView.handleTabs = function(){
  $('#about').hide();

  $('.tab').on('click','a', function(){
    $('section').hide();
    var tabId = $(this).data('tab');
    $('#' + tabId).show();

  });
};

$(function(){
  projectView.populateCategoryFilter();
  projectView.handleTabs();

});





//next up: create media queries for grid layout
