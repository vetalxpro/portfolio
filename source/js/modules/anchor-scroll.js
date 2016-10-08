module.exports=(function(){
  $('.anchor__link,.blog__sidebar-link').on('click', function (e) {
    e.preventDefault();
    var targetElem = $($(this).attr('href'));
    if (targetElem.length !== 0) {
      $('html,body').animate({scrollTop: targetElem.offset().top}, 800);
    }
  });
})();

