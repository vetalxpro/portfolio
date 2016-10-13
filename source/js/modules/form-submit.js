module.exports = function () {
  var formValidation = require('./form-validation');
  formValidation.init();
  var $form = $('#login-form,#feedback-form');

  function init() {
    addListeners();
  }

  function addListeners() {
    $form.on('submit', submitForm);
  }

  function submitForm(e) {
    var url = 'server-url';
    var defObject = ajaxRequest($form, url);
    e.preventDefault();
  }

  function ajaxRequest(form, url) {
    if (!formValidation.validateForm(form)) {
      console.log('form NOT submitted to ' + url);
      return false;
    }
    console.log('form submitted to ' + url);

  }

  if ($form.length !== 0) {
    init();

  }


};