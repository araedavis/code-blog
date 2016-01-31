(function(module){
  var projectView = {};

  //DONE: create filters/categories for projects: ie, javascript, writing, marketing, etc.
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

  projectView.handleCategoryFilter = function(){
    $('#category-filter').on('change', function(){
      var filtered = $(this).val();

      $('.project').each(function(){
        $(this).hide();

        if($(this).data('category') === filtered){
          $(this).show();
        } else if (filtered === 'Filter by Category' || filtered === ''){
          $(this).show();
        };
      });

    });
  };

  projectView.handleTabs = function(){
    $('#projects').hide();
    $('#about').hide();
    $('footer').hide();

    $('.tab').on('click','a', function(){
      $('section').hide();
      $('#landing').hide();
      $('footer').show();
      projectView.toggleSummary();
      projectView.populateCategoryFilter();
      var tabId = $(this).data('tab');
      $('#' + tabId).show();

    });
  };

  projectView.toggleSummary = function(){
    $('.summary').hide();

    $('.accordian').on('click', function(e){
      e.preventDefault();
      var target = $(e.target).parent().parent().next();  //target the project summary
      $(e.target).toggleClass('fa-minus-circle fa-plus-circle');

      if($('.accordian > i').hasClass('fa-minus-circle') === true){
        $(target).show();
      } else {
        $(target).hide();
      }
    });
  };

  // //this doesn't work yet
  // projectView.handleNav = function(){
  //   if ($('.main-nav').hasClass('hidden')){
  //     $('.main-nav').css('visibility', 'hidden');
  //   } else {
  //     $('.main-nav').css('visibility', 'visible');
  //   }
  //
  //   //hideNav();
  //   $('.hamburger').on('click', function(e){
  //     e.preventDefault();
  //     $('.main-nav').toggleClass('hidden');
  //     collapseNav();
  //   });
  // };

  projectView.initIndexPage = function(){
    projectView.populateCategoryFilter();
    projectView.handleCategoryFilter();
    projectView.handleTabs();
    //projectView.toggleSummary();
  };

  module.projectView = projectView;
})(window);
