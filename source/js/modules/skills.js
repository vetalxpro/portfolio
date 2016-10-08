module.exports=function drawSkills(radius) {
  var
      circleLength = 2 * Math.PI * radius,
      delay = 1,
      animate = 'animate-skill 1s ease-in-out reverse';

  function findElements() {
    var skillsElems = $('.skill__list-item'),
        skillsCount = skillsElems.length;
    for (let i = 0; i < skillsCount; i++) {
      var skill = skillsElems.eq(i);
      var attr = skill.attr('data-value');
      if (attr > 100) {
        attr = 100;
      }
      if (attr < 0) {
        attr = 1;
      }
      var value = circleLength - attr * circleLength / 100;
      draw(skill, value, delay, attr);
      delay += 1;

    }
  }

  function draw(skill, value, delay, attr) {
    setTimeout(function () {
      if (attr < 50) {
        skill.find('.skill__path').css({
          'opacity': 0.6,
          'stroke-dashoffset': value,
          'animation': animate
        });
      } else {
        skill.find('.skill__path').css({'stroke-dashoffset': value, 'animation': animate});
      }
    }, delay * 100);

  }

  function start() {
    findElements();
  }

  start();
};