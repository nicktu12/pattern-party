$('.tab').click(function(){
  $('.active-tab').removeClass('active-tab')
  $('.active-tab-header').removeClass('active-tab-header')
  $(this).toggleClass('active-tab-header')
  $(this).next('article').toggleClass('active-tab')
})

