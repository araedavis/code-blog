(function(module){

  var projectView = {};

  var render = function(project){
    var source = $('#projectTemplate').html();
    var template = Handlebars.compile(source);

    var context = {
      title: project.title,
      subtitle: project.subtitle,
      summary: project.summary,
      img: project.img,
      projectUrl: project.projectUrl,
      category: project.category
    };

    var html = template(context);
    return html;
  };

  //DONE: create filters/categories for projects: ie, javascript, writing, marketing, etc.
  projectView.populateCategoryFilter = function(){
    $('#category-filter').html('<option>Filter by Category</option>');
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
  // projectView.handleTabs = function(){
  //   $('#projects').hide();
  //   $('#about').hide();
  //   $('footer').hide();
  //
  //   $('.tab').on('click','a', function(){
  //     $('section').hide();
  //     $('#landing').hide();
  //     $('footer').show();
  //     projectView.toggleSummary();
  //     projectView.populateCategoryFilter();
  //     var tabId = $(this).data('tab');
  //     $('#' + tabId).show();
  //
  //   });
  // };

  projectView.toggleSummary = function(){
    $('.summary').hide();
    $('.accordian').on('click', function(e){

      e.preventDefault();
      var target = $(e.target).parent().next();  //target the project summary

      $(e.target).toggleClass('fa-minus-circle fa-plus-circle');

      if($('.accordian > i').hasClass('fa-minus-circle') === true){
        $(target).show();
      } else {
        $(target).hide();
      }
    });
  };

  projectView.footerStats = function(projects){
    return projects.map(function(project){
      return project.dateCreated;
    });
  };

  // moved to menu.js
  //projectView.handleNav = function(){
  //   $('.hamburger').off('click');
  //
  //   $('.hamburger').on('click', function(e){
  //     e.preventDefault();
  //     $('.main-nav').slideToggle('600', function(){
  //       $('.hamburger > i').toggleClass('fa-times fa-bars');
  //     });
  //   });
  //
  //   $(window).on('resize', function(){
  //     if($(window).width() >= 768){
  //       $('.main-nav').show();
  //     } else if($(window).width() < 768){
  //       $('.main-nav').hide();
  //     };
  //   });
  // };

  projectView.initIndexPage = function(projects){
    $('.project-container').html('');

    //renders each project and appends to container
    projects.forEach(function(pro){
      $('.project-container').append(render(pro));
    });

    projectView.toggleSummary();
    projectView.populateCategoryFilter();
    projectView.handleCategoryFilter();

  };

  module.projectView = projectView;

})(window);
