//googlemaps
require('./modules/maps');

$(function () {
  //preloader
  require('./modules/preloader');

  //skillsDraw
  require('./modules/skills')(42);
  //auth-btn
  require('./modules/auth-button');
  //btn-menu
  require('./modules/btn-menu');

  //anchor scroll
  require('./modules/anchor-scroll');
  //slider
  require('./modules/slider');
  //blog
  require('./modules/blog');
  //form-validation
  require('./modules/form-submit');
});





