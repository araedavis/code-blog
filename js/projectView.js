(function(module){

  var projectView = {};

  // projectView.prototype.toHtml = function(){
  //   var source = $('#projectTemplate').html();
  //   var template = Handlebars.compile(source);
  //
  //   var context = {
  //     title: this.title,
  //     subtitle: this.subtitle,
  //     summary: this.summary,
  //     img: this.img,
  //     projectUrl: this.projectUrl,
  //     category: this.category
  //   };
  //
  //   var html = template(context);
  //   return html;
  // };

  //DONE: create filters/categories for projects: ie, javascript, writing, marketing, etc.
  projectView.populateCategoryFilter = function(){
    $('#category-filter').html('<option>Filter by Category<option>');
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

  projectView.handleNav = function(){
    $('.hamburger').off('click');

    $('.hamburger').on('click', function(e){
      e.preventDefault();
      $('.main-nav').slideToggle('600', function(){
        $('.hamburger > i').toggleClass('fa-times fa-bars');
      });
    });

    $(window).on('resize', function(){
      if($(window).width() >= 768){
        $('.main-nav').show();
      } else if($(window).width() < 768){
        $('.main-nav').hide();
      };
    });
  };

  projectView.initIndexPage = function(){
    $('.project-container').html('');
    //renders each project using toHtml method
    Project.all.forEach(function(pro){
      $('.project-container').append(pro.toHtml());
    });

    projectView.toggleSummary();
    projectView.populateCategoryFilter();
    projectView.handleCategoryFilter();
    projectView.handleNav();

  };

  module.projectView = projectView;

})(window);
