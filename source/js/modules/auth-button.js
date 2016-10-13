module.exports=function(){
  //auth-button(flip)
  $('.auth__link,#wellcome').on('click', function (e) {
    var $this = $(this);
    $('.flipper').toggleClass('flipper_flip');
    e.preventDefault();
    if ($this.hasClass('auth__link')) {
      $this.hide();
    } else {
      $('.auth__link').show();
    }
  });
};