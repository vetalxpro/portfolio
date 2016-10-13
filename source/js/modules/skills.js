module.exports = function drawSkills(radius) {
  var circleLength = 2 * Math.PI * radius;
  var delay = 100;
  var maxPercent = 100;
  var minPercent = 1;
  var currentPercent;
  var drawValue;
  var animate = 'animate-skill 1s ease-in-out reverse';
  var $skillsElems = $('.skill__list-item');

  function findElements() {
    var skillsCount = $skillsElems.length;
    if (skillsCount) {
      for (var i = 0; i < skillsCount; i++) {
        var skill = $skillsElems.eq(i);
        currentPercent = skill.attr('data-percent');
        if (currentPercent > maxPercent) {
          currentPercent = maxPercent;
        }
        if (currentPercent < minPercent || !currentPercent) {
          currentPercent = minPercent;
        }
        drawValue = circleLength - currentPercent * circleLength / maxPercent;
        draw(skill, drawValue, delay, currentPercent);
        delay += 100;

      }
    }

  }

  function draw(skill, drawValue, delay, percent) {
    setTimeout(function () {
      if (percent < maxPercent / 2) {
        skill.find('.skill__path').css({
          'opacity': 0.6,
          'stroke-dashoffset': drawValue,
          'animation': animate
        });
      } else {
        skill.find('.skill__path').css({'stroke-dashoffset': drawValue, 'animation': animate});
      }
    }, delay);

  }

  findElements();

};