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

  //DONE remove duplicates from options
  projectView.populateFilter = function(project){
    var options,
      template = Handlebars.compile($('#optionTemplate').text());

    options = Project.getCategories().map(function(cat){
      return template({val:cat});
    });

    if($('#category-filter option').length < 2){
      $('#category-filter').append(options);
    } else if($('#category-filter option').attr('val', '/projects') === true){
      $('#category-filter').append(Project.all);
    }
  };

  // projectView.handleCategoryFilter = function(){
  //   $('#filters').on('change', 'select', function(){
  //     var resource = this.id.replace('-filter', '');
  //     page('/' + resource + '/' + $(this).val().replace(/\W+/g, '+'));
  //   });
  // };

  //DONE: create filters/categories for projects: ie, javascript, writing, marketing, etc.
  // projectView.populateCategoryFilter = function(){
  //   //$('#category-filter').html('<option>Filter by Category</option>');
  //   var filterVal = [];
  //   $('.project').each(function(){
  //     var val = $(this).attr('data-category');
  //     filterVal.push(val);
  //
  //     filterVal = $.unique(filterVal);
  //     return filterVal;
  //   });
  //
  //   $(filterVal).each(function(num, val){
  //     var optionTag = '<option value="' + val + '">' + val + '</option>';
  //     $('#category-filter').append(optionTag);
  //
  //   });
  // };

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


  projectView.initIndexPage = function(projects){
    $('.project-container').html('');

    //renders each project and appends to container
    projects.forEach(function(pro){
      $('.project-container').append(render(pro));
    });
    projectView.populateFilter(projects);
    projectView.toggleSummary();

    projectView.handleCategoryFilter();

  };

  module.projectView = projectView;

})(window);
