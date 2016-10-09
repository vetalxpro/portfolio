module.exports=(function(){
  var slider=$('.slider');
  var sliderInfo = slider.find('.slider__info-data');
  var sliderView = slider.find('.slider__view-pic');
  var titleContainer = sliderInfo.find('.slider__main-subtitle');
  var techContainer = sliderInfo.find('.slider__tech');
  var linkContainer = sliderInfo.find('.slider__link');
  var fill = function(element){
    var title = element.data('title');
    var tech=element.data('tech');
    var link = element.data('link');
    var picSrc=element.data('pic');
    titleContainer.text(title);
    techContainer.text(tech);
    linkContainer.attr('href',link);
    sliderView.attr('src',picSrc);
  };
  return {
    fill:fill
  };
})();