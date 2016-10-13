module.exports=(function(){
  var slider=$('.slider');
  var sliderInfo = slider.find('.slider__info-data');
  var sliderView = slider.find('.slider__view-pic');
  var linkContainer = sliderInfo.find('.slider__link');
  var fill = function(element){
    linkContainer.attr('href',element.data('link'));
    sliderView.attr('src',element.data('pic'));
  };

  return {
    fill:fill
  };
})();