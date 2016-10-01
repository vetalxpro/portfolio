$(document).ready(function () {
  $('.contact__toggler').on('click', function () {
    var contactMenu = $('.contact__menu');
    if ($(this).text() === 'Скрыть контакты') {
      $(this).text('Показать контакты');
      contactMenu.hide();
    } else {
      $(this).text('Скрыть контакты');
      contactMenu.show();
    }

  });
  $('.btn-menu').on('click',function(){
    $('.modal').toggleClass('modal_active');
  });

  $('.auth__link,#wellcome').on('click',function(e){
    $('.flipper').toggleClass('flipper_flip');
    e.preventDefault();
    if($(this).hasClass('auth__link')){
      $(this).hide();
    }else{
      $('.auth__link').show();
    }
  });
});