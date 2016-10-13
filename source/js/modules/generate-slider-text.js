module.exports = (function () {
  var generate = function (container, element) {
    container.text('');
    _splitCharacters(container, element);
    _setAnimation(container);
  };
  var _splitCharacters = function (container, element) {
    var text;
    if(container.hasClass('slider__main-subtitle')){
      text=element.data('title');
    }
    if(container.hasClass('slider__tech')){
      text=element.data('tech');
    }
    var words=text.split(' ');
    var length = words.length;
    for (var i = 0; i < length; i++) {
      var characters = words[i].split('');
      _generateSpan(container, characters);
    }
  };
  var _generateSpan = function (container, characters) {
    var length = characters.length;
    var $spanWord = $('<span>').addClass('slider__info-word');
    for (var i = 0; i < length; i++) {
      var $spanCharacter = $('<span>');
      $spanCharacter.addClass('slider__info-character').text(characters[i]);
      $spanWord.append($spanCharacter);
    }
    container.append($spanWord).append(' ');
  };
  var _setAnimation = function (container) {
    var delay = 0;
    var chars = container.find('.slider__info-character');
    chars.each(function (i) {
      setTimeout(function(){
        chars.eq(i).addClass('animate');
      },delay);
      delay += 30;
    });
  };

  return {
    generate: generate
  };
})();