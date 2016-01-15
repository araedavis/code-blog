//nav menu function
function hideNav(){
  if ($('.main-nav').hasClass('hidden')){
    $('.main-nav').css('visibility', 'hidden');
  } else {
    $('.main-nav').css('visibility', 'visible');
  }
};

//hideNav();

$('.hamburger').on('click', function(e){
  e.preventDefault();
  $('.main-nav').toggleClass('hidden');
  collapseNav();
});

//Accordian function

function hideProjectSummary(){
  if($('.accordian').hasClass('hide') === true){
    $('.summary').hide();
  } else {
    $('.summary').show();
  }
}

hideProjectSummary();

$('.accordian').on('click', function(e){
  e.preventDefault();
  $('.accordian').toggleClass('hide');

  if($('.accordian').hasClass('hide') === false){
    $('.accordian > i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
  } else {
    $('.accordian > i').addClass('fa-plus-circle').removeClass('fa-minus-circle');
  }

  hideProjectSummary();
});
