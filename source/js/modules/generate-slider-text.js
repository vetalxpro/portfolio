module.exports = function (container, element) {
  function init(){
    container.empty();
    splitCharacters();
    setAnimation();
  }

  function splitCharacters() {
    var text;
    if (container.hasClass('slider__main-subtitle')) {
      text = element.data('title');
    }
    if (container.hasClass('slider__tech')) {
      text = element.data('tech');
    }
    var words = text.split(' ');
    var length = words.length;
    for (var i = 0; i < length; i++) {
      var characters = words[i].split('');
      generateSpan(characters);
    }
  }
  function generateSpan(characters) {
    var length = characters.length;
    var $spanWord = $('<span>').addClass('slider__info-word');
    for (var i = 0; i < length; i++) {
      var $spanCharacter = $('<span>');
      $spanCharacter.addClass('slider__info-character').text(characters[i]);
      $spanWord.append($spanCharacter);
    }
    container.append($spanWord).append(' ');
  }
  function setAnimation() {
    var delay = 0;
    var chars = container.find('.slider__info-character');
    chars.each(function (i) {
      setTimeout(function () {
        chars.eq(i).addClass('animate');
      }, delay);
      delay += 30;
    });
  }
  init();
};