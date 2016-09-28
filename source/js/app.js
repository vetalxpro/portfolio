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
});