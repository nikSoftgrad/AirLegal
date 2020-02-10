$('.dropdown .js-dropdown').click(function(){
  $(this).next('.dropdown__menu').toggleClass('show');
});
$(document).click(function(e){
  var dropdown = $('.dropdown');
  if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
         if($('.dropdown__menu').hasClass('show')){
          $('.dropdown__menu').removeClass('show');
         };
    }
})
