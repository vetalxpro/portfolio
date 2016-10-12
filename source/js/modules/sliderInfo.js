module.exports=(function(){
  var slider=$('.slider');
  var sliderInfo = slider.find('.slider__info-data');
  var sliderView = slider.find('.slider__view-pic');
  var titleContainer = sliderInfo.find('.slider__main-subtitle');
  var techContainer = sliderInfo.find('.slider__tech');
  var linkContainer = sliderInfo.find('.slider__link');
  var fill = function(element){
    titleContainer.text(element.data('title'));
    techContainer.text(element.data('tech'));
    linkContainer.attr('href',element.data('link'));
    sliderView.attr('src',element.data('pic'));
  };
  return {
    fill:fill
  };
})();