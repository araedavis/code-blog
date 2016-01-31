(function(module){
<<<<<<< HEAD
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

=======

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

>>>>>>> f105dfd50cddf3ef2498087eb5767f3dff066758
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
<<<<<<< HEAD

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

  projectView.handleNav = function(){
    
    $('.hamburger').on('click', function(e){
      e.preventDefault();
      $('.main-nav').slideToggle();

    });
  };

  projectView.initIndexPage = function(){
    projectView.populateCategoryFilter();
    projectView.handleCategoryFilter();
    projectView.handleTabs();
    projectView.handleNav();
=======

  projectView.handleTabs = function(){
    $('#projects').hide();
    $('#about').hide();

    $('.tab').on('click','a', function(){
      $('section').hide();
      $('#landing').hide();
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

  //wraps every 2 projects into a row div for skeleton grid layout
  projectView.skeletonGrid = function (){
    $('.container:nth-child(2)').wrap('<div class="row"></div>');
  };

  projectView.initIndexPage = function(){
    projectView.skeletonGrid();
    projectView.populateCategoryFilter();
    projectView.handleCategoryFilter();
    projectView.handleTabs();
    projectView.toggleSummary();
>>>>>>> f105dfd50cddf3ef2498087eb5767f3dff066758
  };

  module.projectView = projectView;
})(window);
