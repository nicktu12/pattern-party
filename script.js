$('.tab').click(function(){
  $('.active-tab').removeClass('active-tab')
  $('.active-tab-header').removeClass('active-tab-header')
  $(this).toggleClass('active-tab-header')
  $(this).next('article').toggleClass('active-tab')
})

$('.header-button').click(function(){
  $('.header-ul').toggleClass('header-hidden') 
  $('.header-search').toggleClass('header-hidden') 
  $('.header-bar-section').toggleClass('extra-padding')
})
